import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import CreateProfileCard from 'components/CreateProfileCard/CreateProfileCard';

describe('Create profiles card', () => {
  const props = {
    setShowModal: (fn: any) => {
      const show = true;
      return fn(show);
    },
  };
  it('renders card component', async () => {
    render(<CreateProfileCard {...props} />);

    const cardButton = screen.getByRole('button') as HTMLInputElement;

    expect(cardButton).toBeInTheDocument();
    await waitFor(() => fireEvent.click(cardButton));
  });
});
