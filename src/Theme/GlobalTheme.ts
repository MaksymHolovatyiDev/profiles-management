import { createGlobalStyle } from 'styled-components';

import { mainBackground } from './Theme';

export const GlobalStyles = createGlobalStyle`
body{
  background-color: ${mainBackground};
}
`;
