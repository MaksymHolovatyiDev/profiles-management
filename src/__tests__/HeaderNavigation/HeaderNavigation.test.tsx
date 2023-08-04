import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import HeaderNavigation from 'components/HeaderNavigation/HeaderNavigation';
import { Wrapper } from '__mocks__/utils';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('HeaderNavigation', () => {
  it('renders HeaderNavigation component', () => {
    render(
      <Wrapper>
        <HeaderNavigation />
      </Wrapper>
    );

    const logOutBtn = screen.getByRole('button');

    fireEvent.click(logOutBtn);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
  });
});
