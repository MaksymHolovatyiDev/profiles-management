import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  borderColor,
  buttonBackgroundColor,
  mainGray,
  mainHoverColor,
  mainTextBlack,
  mainYellow,
} from 'Theme/Theme';

export const MainHeader = styled('header')`
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 4px 3px ${borderColor}44;

  padding: 0 120px;
`;

export const UserContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const UserAvatar = styled('img')`
  height: 48px;
  width: 48px;
`;

export const UserName = styled('p')`
  color: ${mainTextBlack};

  font-family: Poppins;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
`;

export const NavigationList = styled('ul')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  & > li:last-child {
    margin-left: 60px;
  }
`;

const headerNavigation = css`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${mainTextBlack};

  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;

  text-decoration: none;

  transition: color 150ms cubic-bezier(0.18, 0.75, 0.95, 0.63);

  &:hover,
  &:focus {
    color: ${mainHoverColor};
  }
`;

export const NavigationLink = styled(NavLink)`
  ${headerNavigation}

  &:hover > svg,
  &:focus > svg {
    fill: ${mainHoverColor};
  }
`;

export const LogoutBtn = styled('button')`
  ${headerNavigation}

  background-color: transparent;

  border: none;

  cursor: pointer;
`;

export const NavigationImg = styled('svg')`
  height: 24px;
  width: 24px;

  margin-left: 7px;

  transition: fill 150ms cubic-bezier(0.18, 0.75, 0.95, 0.63);
`;

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

export const ThemeCusomInput = styled('div')`
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
