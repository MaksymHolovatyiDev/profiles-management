import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';

import Dashboard from 'components/Dashboard/Dashboard';
import Users from 'components/Users/Users';
import { server } from '__mocks__/server';
import { Wrapper } from '__mocks__/utils';

describe('Dashboard error', () => {
  it('server error', async () => {
    server.use(
      rest.get('http://localhost:5000/api/dashboard', (_, res, ctx) => {
        return res.once(ctx.json({ error: 'error' }), ctx.status(500));
      })
    );

    render(
      <Wrapper>
        <Dashboard />
      </Wrapper>
    );

    expect(screen.getByText('Dashboard:')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(2)).not.toBeInTheDocument();
      expect(screen.queryByText(3)).not.toBeInTheDocument();
      expect(screen.queryByText(4)).not.toBeInTheDocument();
    });
  });
});

describe('Users error', () => {
  it('server error', async () => {
    server.use(
      rest.get('http://localhost:5000/api/users', (_, res, ctx) => {
        return res.once(ctx.json({ error: 'error' }), ctx.status(500));
      })
    );

    render(
      <Wrapper>
        <Users />
      </Wrapper>
    );

    await waitFor(() => {
      expect(screen.queryByText('Tom')).not.toBeInTheDocument();
      expect(screen.queryByText('erer')).not.toBeInTheDocument();
      expect(screen.queryByText('1 profile')).not.toBeInTheDocument();
    });
  });
});
