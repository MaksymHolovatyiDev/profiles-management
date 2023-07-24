import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mainHoverColor, mainTextBlack } from 'Theme/Theme';

export const MainHeader = styled('header')`
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 120px;
`;

export const UserContainer = styled('div')`
  display: flex;
  align-items: center;
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

  margin-left: 25px;
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

export const NavigationLink = styled(NavLink)`
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

  &:hover > svg,
  &:focus > svg {
    fill: ${mainHoverColor};
  }
`;

export const NavigationImg = styled('svg')`
  height: 24px;
  width: 24px;

  margin-left: 7px;

  transition: fill 150ms cubic-bezier(0.18, 0.75, 0.95, 0.63);
`;
