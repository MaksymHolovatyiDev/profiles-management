import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mainHoverColor, mainTextBlack } from 'Theme/Theme';

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

  @media screen and (max-width: 1063px) {
    font-size: 0;
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
