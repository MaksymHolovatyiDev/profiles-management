import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import HeaderNavigation from 'components/HeaderNavigation/HeaderNavigation';
import { Wrapper } from '__mocks__/utils';

describe('HeaderNavigation', () => {
  it('renders HeaderNavigation component', async () => {
    const history = createMemoryHistory({ initialEntries: ['/Dashboard'] });
    render(
      <Wrapper>
        <HeaderNavigation />
      </Wrapper>
    );

    const logOutBtn = screen.getByRole('button');

    expect(history.location.pathname).toBe('/Dashboard');
    fireEvent.click(logOutBtn);
    await waitFor(() => expect(history.location.pathname).toBe('/'));
  });
});
