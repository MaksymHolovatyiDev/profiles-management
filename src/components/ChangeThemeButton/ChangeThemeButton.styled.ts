import styled from 'styled-components';

import { buttonBackgroundColor, mainGray, mainYellow } from 'Theme/Theme';

export const ThemeContainer = styled('label')`
  width: 60px;

  background-color: ${mainGray}44;

  box-shadow: inset 0 0 10px black;

  border-radius: 40px;

  cursor: pointer;
`;

export const ThemeInput = styled('input')`
  display: none;

  &:checked + div {
    background-color: ${buttonBackgroundColor};

    transform: translate(35px, 0);
  }
  &:checked + div > svg {
    fill: ${mainYellow};

    transform: rotate(90deg);
  }
  &:checked + div > svg > use:first-child {
    opacity: 1;
  }
  &:checked + div > svg > use:last-child {
    opacity: 0;
  }
`;

export const ThemeCustomInput = styled('div')`
  height: 25px;
  width: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${mainGray};

  border-radius: 100%;

  transition: transform 250ms linear, background-color 250ms linear;
`;

export const ThemeImg = styled('svg')`
  height: 22px;
  width: 22px;

  fill: white;

  transition: transform 250ms linear,
    fill 250ms cubic-bezier(0.73, 0.14, 0.67, 0.98);

  & > use {
    transition: opacity 250ms cubic-bezier(0.73, 0.14, 0.67, 0.98);
  }
  & > use:first-child {
    opacity: 0;
  }
`;
