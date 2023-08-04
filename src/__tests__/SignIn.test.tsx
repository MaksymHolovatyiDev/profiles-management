import '@testing-library/jest-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import { Wrapper } from '__mocks__/utils';
import SignIn from 'components/SignIn/SignIn';

describe('App', () => {
  const props = {
    emailError: false,
    passwordError: false,
    onFormSubmit: () => true,
    onButtonClick: () => true,
    isFetching: false,
  };
  it('renders SignIn component', async () => {
    render(
      <Wrapper>
        <SignIn {...props} />
      </Wrapper>
    );

    const button = screen.getByRole('button');

    const link = screen.getByRole('link');

    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Email/i })).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('remember me')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();

    expect(link).toHaveAttribute('href', '/SignUp');

    await waitFor(() => fireEvent.click(button));
    screen.debug();
  });
});
