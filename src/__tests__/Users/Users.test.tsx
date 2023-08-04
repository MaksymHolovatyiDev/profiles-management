import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import { Wrapper } from '__mocks__/utils';
import Users from 'components/Users/Users';

describe('Users', () => {
  it('renders Users component', async () => {
    render(
      <Wrapper>
        <Users />
      </Wrapper>
    );

    await waitFor(() => {
      expect(screen.queryByText('Tom')).toBeInTheDocument();
      expect(screen.queryByText('erer')).toBeInTheDocument();
      expect(screen.queryByText('1 profile')).toBeInTheDocument();
    });
  });
});
