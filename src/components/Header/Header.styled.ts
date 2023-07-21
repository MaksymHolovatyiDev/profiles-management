import styled from 'styled-components';
import { mainTextBlack } from 'Theme/Theme.ts';

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

export const NavigationLink = styled('a')`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${mainTextBlack};

  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
`;

export const NavigationImg = styled('svg')`
  height: 24px;
  width: 24px;

  margin-left: 7px;
`;
