import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import App from '../components/App';
import { Wrapper } from '__mocks__/utils';

describe('App', () => {
  it('renders App component', () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
    // expect(screen.getByText('Sign in')).toBeInTheDocument();
    // expect(screen.getByLabelText('Email')).toBeInTheDocument();
    // expect(screen.getByRole('textbox', { name: /Email/i })).toBeInTheDocument();
    // expect(screen.getByLabelText('Password')).toBeInTheDocument();
    // expect(screen.getByLabelText('remember me')).toBeInTheDocument();
    // expect(screen.getByRole('checkbox')).toBeInTheDocument();
    // expect(screen.getByRole('button')).toBeInTheDocument();
    // expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
