import express from 'express5';
export function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.get('/files/:name{.:ext}', (req, res) =>
    res.json({ name: req.params.name, extension: req.params.ext ?? null }),
  );
  app.get('/assets/*segments', (req, res) => res.json({ path: req.params.segments }));
  app.get('/async-error', async () => {
    throw new Error('Synthetic upstream failure');
  });
  app.use((err, req, res, next) => {
    res.status(503).json({ error: err.message });
  });
  return app;
}
