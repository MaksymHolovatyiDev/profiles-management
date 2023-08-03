import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import ChangeThemeButton from 'components/ChangeThemeButton/ChangeThemeButton';
import { Wrapper } from '__mocks__/utils';

describe('Change theme button', () => {
  it('renders button component', () => {
    render(
      <Wrapper>
        <ChangeThemeButton />
      </Wrapper>
    );

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toEqual(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });
});
