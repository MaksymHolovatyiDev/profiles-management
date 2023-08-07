import { rest } from 'msw';

const BASE_URL = 'http://localhost:5000';

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

const allUsers = [{ _id: 'qwe', name: 'Tom', email: 'erer', profiles: 1 }];

const SignInRoute = `${BASE_URL}/api/auth/SignIn`;
const SignUpRoute = `${BASE_URL}/api/auth/SignUp`;

const profilesRoute = `${BASE_URL}/api/Profiles`;

const profilesIdRoute = `${BASE_URL}/api/Profiles/${user.id}`;

const dashboardRoute = `${BASE_URL}/api/dashboard`;

const usersRoute = `${BASE_URL}/api/users`;
const usersIdRoute = `${BASE_URL}/api/Users/${user.id}`;

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
    return res(ctx.json(allUsers), ctx.status(200));
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
