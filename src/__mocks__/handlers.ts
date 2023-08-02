import { rest } from 'msw';

const dashboard = { users: 2, profiles: 3, adult: 4 };

const dashboardRoute = '/api/Dashboard';
const showRoute = `/api/campaigns/character`;
const postRoute = `/api/campaigns/1/characters`;
const deleteRoute = `/api/campaigns/characters/`;

export const characterHandlers = [
  rest.get(dashboardRoute, (_, res, ctx) => {
    return res(ctx.json(dashboard), ctx.status(200));
  }),
  rest.get(showRoute, (_, res, ctx) => {
    return res(ctx.json(res), ctx.status(200));
  }),
  rest.post(postRoute, (req, res, ctx) => {
    return res(ctx.json(req), ctx.status(201));
  }),
  rest.delete(deleteRoute, (_, res, ctx) => {
    return res(ctx.status(200));
  }),
];
