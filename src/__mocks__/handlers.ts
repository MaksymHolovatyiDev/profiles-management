import { rest } from 'msw';

const user = {
  id: '123',
  name: 'user1123',
  token: 'abc',
  admin: 'true',
  profile: {
    id: '234',
    name: 'qwe',
    gender: 'male',
  },
};

const dashboard = { users: 2, profiles: 3, adult: 4 };

const SignInRoute = '/api/auth/SignIn';
const SignUpRoute = '/api/auth/SignUp';

const profilesRoute = '/api/Profiles';
const profilesIdRoute = `http://localhost:5000/api/Profiles/${user.id}`;

const dashboardRoute = 'http://localhost:5000/api/dashboard';

const usersRoute = '/api/Users';
const usersIdRoute = `/api/Users/${user.id}`;

export const characterHandlers = [
  rest.post(SignUpRoute, (_, res, ctx) => {
    return res(
      ctx.json({
        id: user.id,
        name: user.name,
        token: user.token,
        admin: user.admin,
      }),
      ctx.status(201)
    );
  }),
  rest.post(SignInRoute, (_, res, ctx) => {
    return res(
      ctx.json({
        id: user.id,
        name: user.name,
        token: user.token,
        admin: user.admin,
      }),
      ctx.status(200)
    );
  }),
  rest.get(profilesIdRoute, (_, res, ctx) => {
    return res(
      ctx.json({
        _id: 'qweqw123',
        name: 'fsd',
        gender: 'male',
        birthdate: '123123123',
        city: 'ert',
      }),
      ctx.status(200)
    );
  }),
  rest.post(profilesRoute, (req, res, ctx) => {
    return res(ctx.json({ ...req, id: '987' }), ctx.status(201));
  }),
  rest.patch(profilesIdRoute, (req, res, ctx) => {
    return res(ctx.json({ ...req, id: '987' }), ctx.status(200));
  }),
  rest.delete(profilesIdRoute, (_, res, ctx) => {
    return res(ctx.json({}), ctx.status(204));
  }),
  rest.get(dashboardRoute, (_, res, ctx) => {
    return res(ctx.json(dashboard), ctx.status(200));
  }),
  rest.get(usersRoute, (_, res, ctx) => {
    return res(ctx.json(user), ctx.status(200));
  }),
  rest.post(usersIdRoute, (req, res, ctx) => {
    return res(ctx.json({ ...req, id: user.id }), ctx.status(200));
  }),
  rest.patch(usersIdRoute, (req, res, ctx) => {
    return res(ctx.json({ ...req, id: user.id }), ctx.status(200));
  }),
  rest.delete(usersIdRoute, (_, res, ctx) => {
    return res(ctx.json({}), ctx.status(204));
  }),
];
