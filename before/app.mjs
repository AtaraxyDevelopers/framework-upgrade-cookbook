import express from 'express4';
export function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.get('/files/:name.:ext?', (req, res) =>
    res.json({ name: req.params.name, extension: req.params.ext ?? null }),
  );
  app.get('/assets/*', (req, res) => res.json({ path: req.params[0].split('/') }));
  const asyncRoute = (handler) => (req, res, next) =>
    Promise.resolve(handler(req, res, next)).catch(next);
  app.get(
    '/async-error',
    asyncRoute(async () => {
      throw new Error('Synthetic upstream failure');
    }),
  );
  app.use((err, req, res, next) => {
    res.status(503).json({ error: err.message });
  });
  return app;
}
