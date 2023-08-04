import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import Profiles from 'components/Profiles/Profiles';
import { Wrapper } from '__mocks__/utils';

describe('Create Profiles', () => {
  it('renders ProfilesCm component', async () => {
    render(
      <Wrapper>
        <Profiles />
      </Wrapper>
    );

    await waitFor(() => {
      expect(screen.getByText('Profiles:')).toBeInTheDocument();
    });
  });
});
