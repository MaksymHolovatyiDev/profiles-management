import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Wrapper } from '__mocks__/utils';
import UserAvatar from 'components/UserAvatar/UserAvatar';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(() => 'UserName'),
}));

jest.mock('Images/admin.png');
jest.mock('Images/user.png');

describe('UserAvatar', () => {
  it('renders UserAvatar component', () => {
    render(
      <Wrapper>
        <UserAvatar />
      </Wrapper>
    );

    expect(screen.getByAltText('User Avatar')).toBeInTheDocument();

    expect(screen.getByText('UserName')).toBeInTheDocument();
  });
});
