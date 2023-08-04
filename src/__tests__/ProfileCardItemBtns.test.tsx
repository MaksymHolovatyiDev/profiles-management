import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor, render } from '@testing-library/react';
import ProfileCardItemBtns from 'components/ProfileCardItemBtns/ProfileCardItemBtns';
import { Wrapper } from '__mocks__/utils';

describe('Create ProfileCardItemBtns buttons', () => {
  const props = {
    setShowModal: (data: any) => data,
    id: '123',
  };
  it('renders ProfileCardItemBtns component', async () => {
    render(
      <Wrapper>
        <ProfileCardItemBtns {...props} />
      </Wrapper>
    );

    const deleteButton = screen.getAllByRole('button')[0];

    const closeButton = screen.getAllByRole('button')[1];

    await waitFor(() => {
      fireEvent.click(deleteButton);
      fireEvent.click(closeButton);
    });
  });
});
