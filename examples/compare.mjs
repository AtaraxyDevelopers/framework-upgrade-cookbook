import { createApp as before } from '../before/app.mjs';
import { createApp as after } from '../after/app.mjs';
for (const [label, createApp] of [
  ['Before / Express 4', before],
  ['After / Express 5', after],
]) {
  const server = createApp().listen(0, '127.0.0.1');
  await new Promise((r) => server.once('listening', r));
  try {
    console.log(label);
    for (const route of [
      '/files/readme',
      '/files/readme.md',
      '/assets/css/main.css',
      '/async-error',
    ]) {
      const response = await fetch('http://127.0.0.1:' + server.address().port + route);
      console.log(route, response.status, await response.text());
    }
  } finally {
    server.closeAllConnections();
    await new Promise((r) => server.close(r));
  }
}
