import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import Profiles from 'components/Profiles/Profiles';
import { rest } from 'msw';
import { server } from '__mocks__/server';
import { Wrapper } from '__mocks__/utils';

describe('Create Profiles', () => {
  it('renders ProfilesCm component', async () => {
    render(
      <Wrapper>
        <Profiles />
      </Wrapper>
    );
    server.use(
      rest.get('http://localhost:5000/api/profiles/123', (_, res, ctx) => {
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
      })
    );

    await waitFor(() => {
      expect(screen.queryByText('Profiles:')).toBeInTheDocument();
    });
  });
});
