import styled from 'styled-components';

export const Backdrop = styled('div')`
  position: fixed;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 20%);

  overflow: auto;
`;
