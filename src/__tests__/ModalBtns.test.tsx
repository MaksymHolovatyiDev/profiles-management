import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import ModalBtns from 'components/ModalBtns/ModalBtns';

describe('Create modal buttons', () => {
  const props = {
    showModal: (data: any) => data,
  };
  it('renders ModalBtns component', () => {
    render(<ModalBtns {...props} />);

    const closeButton = screen.getAllByRole('button')[1];

    fireEvent.click(closeButton);
  });
});
