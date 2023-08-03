import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { server } from '__mocks__/server';

import Dashboard from 'components/Dashboard/Dashboard';
import { Wrapper } from '__mocks__/utils';
import { rest } from 'msw';

describe('Dashboard', () => {
  it('renders Dashboard component', async () => {
    render(
      <Wrapper>
        <Dashboard />
      </Wrapper>
    );
    server.use(
      rest.get('http://localhost:5000/api/dashboard', (_, res, ctx) => {
        return res(
          ctx.json({ users: 2, profiles: 3, adult: 4 }),
          ctx.status(200)
        );
      })
    );

    await waitFor(() => {
      expect(screen.queryByText(2)).toBeInTheDocument();
      expect(screen.queryByText(3)).toBeInTheDocument();
      expect(screen.queryByText(4)).toBeInTheDocument();
    });
  });
});
