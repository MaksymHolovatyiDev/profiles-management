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
    waitFor(() => {
      expect(screen.findByText(2)).toBeInTheDocument();
      expect(screen.findByText(3)).toBeInTheDocument();
      expect(screen.findByText(4)).toBeInTheDocument();
    });
  });
});
