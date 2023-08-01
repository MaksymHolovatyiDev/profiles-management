import { useEffect } from 'react';

export function useModal(showModal: any) {
  const handleClick = (evt: KeyboardEvent) => {
    if (evt.code === 'Escape') {
      showModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, []);
}
