import styled from 'styled-components';

import {
  mainGray,
  lightGreen,
  deleteButton,
  white,
  buttonBackgroundColor,
} from 'Theme/Theme';

export const ModalBtnsContainer = styled('div')`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  margin-top: 25px;
`;

export const ModalBtn = styled('button')`
  height: 38px;
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${buttonBackgroundColor};

  border: 0;
  border-radius: 8px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);

  &:first-child:hover,
  &:first-child:focus {
    background-color: ${lightGreen};
  }

  &:last-child:hover,
  &:last-child:focus {
    background-color: ${deleteButton};
  }

  &:hover > svg,
  &:focus > svg {
    fill: ${white};
  }
`;

export const ModalImage = styled('svg')`
  height: 24px;
  width: 24px;

  fill: ${mainGray};

  transition: background-color 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);
`;
