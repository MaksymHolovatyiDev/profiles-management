import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Wrapper } from '__mocks__/utils';
import UserCardItem from 'components/Users/UserCardItem';

describe('UserCardItem', () => {
  const props = { _id: 'qwe', name: 'Tom', email: 'erer', profiles: 1 };
  it('renders UserCardItem component', () => {
    render(
      <Wrapper>
        <UserCardItem {...props} />
      </Wrapper>
    );

    expect(screen.getByText('Tom')).toBeInTheDocument();
    expect(screen.getByText('erer')).toBeInTheDocument();
    expect(screen.getByText('1 profile')).toBeInTheDocument();
  });
});
