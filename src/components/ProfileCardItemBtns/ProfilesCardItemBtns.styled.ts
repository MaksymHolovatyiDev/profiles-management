import styled from 'styled-components';

import {
  mainGray,
  borderColor,
  buttonHoverColor,
  editButton,
  deleteButton,
} from 'Theme/Theme';

export const ProfileBtnsContainer = styled('div')`
  height: 40px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  border: none;
  border-top: 1px solid ${borderColor};
  margin-top: auto;

  transform: translate(0, 100%);
  transition: transform 180ms cubic-bezier(0.18, 0.75, 0.95, 0.63);
`;

export const ProfileBtn = styled('button')`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${mainGray};
  background-color: transparent;

  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;

  border: none;

  cursor: pointer;

  transition: color 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63),
    background-color 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);

  &:hover:first-child,
  &:focus:first-child {
    background-color: ${editButton};
    color: ${buttonHoverColor};
  }

  &:hover:last-child,
  &:focus:last-child {
    background-color: ${deleteButton};
    color: ${buttonHoverColor};
  }

  &:hover > svg,
  &:focus > svg {
    stroke: ${buttonHoverColor};
  }

  &:first-child {
    border-right: 1px solid ${borderColor};
  }
`;

export const ProfileBtnImg = styled('svg')`
  height: 18px;
  width: 18px;

  stroke: ${mainGray};

  margin-left: 7px;

  transition: stroke 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);
`;
