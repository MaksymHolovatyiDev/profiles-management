import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import MainModal from 'components/MainModal/MainModal';
import { useCreateProfilesMutation } from 'Redux/services/backendAPI';
import { Wrapper } from '__mocks__/utils';

describe('Main modal', () => {
  const data = {
    APIfunction: useCreateProfilesMutation,
    showModal: (fn: any) => {
      const show = true;
      return fn(show);
    },
    setUserId: null,
    initialValues: {
      name: '',
      gender: 'male',
      city: '',
    },
    invalidate: true,
  };
  it('renders mainModal component', async () => {
    render(
      <Wrapper>
        <MainModal data={data} />
      </Wrapper>
    );

    expect(screen.getByText('name:')).toBeInTheDocument();
    expect(screen.getByText('gender:')).toBeInTheDocument();
    expect(screen.getByText('birthdate:')).toBeInTheDocument();
    expect(screen.getByText('city:')).toBeInTheDocument();

    expect(screen.getByRole('textbox', { name: 'name:' })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: 'birthdate:' })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'city:' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'male' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'female' })).toBeInTheDocument();

    const submitButton = screen.getAllByRole('button')[0];
    expect(submitButton).toBeInTheDocument();

    await waitFor(() => fireEvent.click(submitButton));
  });
});
