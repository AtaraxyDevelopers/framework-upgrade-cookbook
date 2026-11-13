import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createApp as before } from '../before/app.mjs';
import { createApp as after } from '../after/app.mjs';
import express5 from 'express5';
for (const [version, createApp] of [
  ['Express 4', before],
  ['Express 5', after],
]) {
  test(version + ' preserves all three migration contracts', async (t) => {
    const server = createApp().listen(0, '127.0.0.1');
    await new Promise((r) => server.once('listening', r));
    t.after(() => {
      server.closeAllConnections();
      return new Promise((r) => server.close(r));
    });
    const base = 'http://127.0.0.1:' + server.address().port;
    for (const [route, expected] of [
      ['/files/readme', { name: 'readme', extension: null }],
      ['/files/readme.md', { name: 'readme', extension: 'md' }],
      ['/assets/css/main.css', { path: ['css', 'main.css'] }],
    ]) {
      const response = await fetch(base + route);
      assert.equal(response.status, 200);
      assert.deepEqual(await response.json(), expected);
    }
    const failure = await fetch(base + '/async-error');
    assert.equal(failure.status, 503);
    assert.deepEqual(await failure.json(), { error: 'Synthetic upstream failure' });
    assert.equal((await fetch(base + '/not-found')).status, 404);
  });
}
test('old optional and unnamed-wildcard syntax fails under Express 5', () => {
  const app = express5();
  assert.throws(() => app.get('/files/:name.:ext?', () => {}));
  assert.throws(() => app.get('/assets/*', () => {}));
});
