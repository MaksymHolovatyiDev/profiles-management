import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import Dashboard from 'components/Dashboard/Dashboard';
import { Wrapper } from '__mocks__/utils';

describe('Dashboard', () => {
  it('renders Dashboard component', async () => {
    render(
      <Wrapper>
        <Dashboard />
      </Wrapper>
    );

    expect(screen.getByText('Dashboard:')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(2)).toBeInTheDocument();
      expect(screen.queryByText(3)).toBeInTheDocument();
      expect(screen.queryByText(4)).toBeInTheDocument();
    });
  });
});
