import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import HeaderNavigationLinkItem from 'components/HeaderNavigation/HeaderNavigationLinkItem';
import { Wrapper } from '__mocks__/utils';

describe('HeaderNavigationLinkItem', () => {
  const linkData = { route: '/', click: () => true, text: 'adf', image: 'img' };
  it('renders HeaderNavigationLinkItem component', () => {
    render(
      <Wrapper>
        <HeaderNavigationLinkItem linkData={linkData} />
      </Wrapper>
    );

    const link = screen.getByRole('link');

    expect(screen.queryByText('adf')).toBeInTheDocument();
    fireEvent.click(link);
    expect(link).toHaveAttribute('href', '/');
  });
});
