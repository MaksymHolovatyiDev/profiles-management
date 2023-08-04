import '@testing-library/jest-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import { Wrapper } from '__mocks__/utils';
import SignUp from 'components/SignUp/SignUp';

describe('SignUp', () => {
  const props = {
    emailError: false,
    passwordError: false,
    onFormSubmit: () => true,
    onButtonClick: () => true,
    isFetching: false,
  };
  it('renders SignUp component', async () => {
    render(
      <Wrapper>
        <SignUp {...props} />
      </Wrapper>
    );

    const button = screen.getByRole('button');

    const link = screen.getByRole('link');

    expect(screen.getByText('Create your account')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Email/i })).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('is admin')).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: 'is admin' })
    ).toBeInTheDocument();
    expect(screen.getByLabelText('remember me')).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: 'remember me' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();

    expect(link).toHaveAttribute('href', '/SignIn');

    await waitFor(() => fireEvent.click(button));
  });
});
