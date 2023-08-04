import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import UserModal from 'components/UsersModal/UsersModal';
import { useCreateProfilesMutation } from 'Redux/services/backendAPI';
import { Wrapper } from '__mocks__/utils';

describe('UserModal', () => {
  const data = {
    APIfunction: useCreateProfilesMutation,
    showModal: (fn: any) => {
      const show = true;
      return fn(show);
    },
    _id: '123',
    initialState: {
      name: 'Mike',
      gender: 'male',
      role: 'admin',
    },
  };
  it('renders UserModal component', async () => {
    render(
      <Wrapper>
        <UserModal data={data} />
      </Wrapper>
    );

    expect(screen.getByText('user name:')).toBeInTheDocument();
    expect(screen.getByText('email:')).toBeInTheDocument();
    expect(screen.getByText('role:')).toBeInTheDocument();

    // screen.getByRole('');

    expect(
      screen.getByRole('textbox', { name: 'user name:' })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'email:' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'admin' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'user' })).toBeInTheDocument();

    const submitButton = screen.getAllByRole('button')[0];
    const closeButton = screen.getAllByRole('button')[0];

    await waitFor(() => {
      fireEvent.click(submitButton);
      fireEvent.click(closeButton);
    });
  });
});
