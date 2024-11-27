// src/mockServer.js
import { setupWorker, rest } from 'msw';

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', roles: ['Admin'] },
  { id: 2, name: 'Bob', email: 'bob@example.com', roles: ['Editor'] },
];

const roles = [
  { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
];

const worker = setupWorker(
  rest.get('/api/users', (req, res, ctx) => res(ctx.json(users))),
  rest.get('/api/roles', (req, res, ctx) => res(ctx.json(roles))),
  rest.delete('/api/users/:id', (req, res, ctx) => res(ctx.status(204)))
);

worker.start();
