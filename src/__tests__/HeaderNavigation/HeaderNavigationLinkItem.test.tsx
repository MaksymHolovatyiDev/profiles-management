import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import HeaderNavigationLinkItem from 'components/HeaderNavigation/HeaderNavigationLinkItem';
import { Wrapper } from '__mocks__/utils';

describe('HeaderNavigationLinkItem', () => {
  const linkData = { route: '/', click: () => true, text: 'adf', image: 'img' };
  it('renders HeaderNavigationLinkItem component', async () => {
    const history = createMemoryHistory({ initialEntries: ['/Dashboard'] });
    render(
      <Wrapper>
        <HeaderNavigationLinkItem linkData={linkData} />
      </Wrapper>
    );

    const link = screen.getByRole('link');

    await waitFor(() => expect(screen.queryByText('adf')).toBeInTheDocument());
    expect(history.location.pathname).toBe('/Dashboard');
    fireEvent.click(link);
    await waitFor(() => expect(history.location.pathname).toBe('/'));
  });
});
