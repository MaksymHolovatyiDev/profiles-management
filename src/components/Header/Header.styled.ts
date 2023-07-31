import styled from 'styled-components';
import { borderColor } from 'Theme/Theme';

export const MainHeader = styled('header')`
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 4px 3px ${borderColor}44;

  padding: 0 120px;
`;
