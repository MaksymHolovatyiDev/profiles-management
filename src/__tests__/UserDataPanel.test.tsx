import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { Wrapper } from '__mocks__/utils';
import UserDataPanel from 'components/UserDataPanel/UserDataPanel';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(() => ({ name: 'Nick', email: 'qwe', role: 'admin' })),
}));

describe('UserDataPanel', () => {
  const props = {
    setShowUserModal: () => true,
    _location: { state: { _id: 'qwe' } },
  };
  it('renders UserDataPanel component', async () => {
    render(
      <Wrapper>
        <UserDataPanel {...props} />
      </Wrapper>
    );

    expect(screen.getByText('Nick')).toBeInTheDocument();
    expect(screen.getByText('qwe')).toBeInTheDocument();
    expect(screen.getByText('admin')).toBeInTheDocument();

    const editButton = screen.getAllByRole('button')[0];
    const deleteButton = screen.getAllByRole('button')[1];

    await waitFor(() => {
      fireEvent.click(editButton);
    });
    await waitFor(() => {
      fireEvent.click(deleteButton);
    });
  });
});
