import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'Redux/store';

export function Wrapper({ children }: any) {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
}
