import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ProfilesCardItem from 'components/Profiles/ProfilesCardItem';
import { Wrapper } from '__mocks__/utils';

describe('Create ProfilesCardItem', () => {
  const props = {
    name: 'abc',
    gender: 'male',
    birthDate: '19092009',
    city: 'Odesa',
    id: '123',
  };
  it('renders ProfilesCardItem component', () => {
    render(
      <Wrapper>
        <ProfilesCardItem {...props} />
      </Wrapper>
    );

    expect(screen.getByText('abc')).toBeInTheDocument();
    expect(screen.getByText('male')).toBeInTheDocument();
    expect(screen.getByText('Odesa')).toBeInTheDocument();
  });
});
