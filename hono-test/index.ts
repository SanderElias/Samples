import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();
app.get('/', c => c.text('Hono meets Node.js'));
app.get('/lamp/:id/:state', c => {
  const { id, state }: { id: string; state: 'on' | 'off' | string } =
    c.req.param();
  return c.text(`Lamp ${id} turned ${state}`);
});

serve(app, info => {
  console.log(`Listening on http://localhost:${info.port}`); // Listening on http://localhost:3000
});
