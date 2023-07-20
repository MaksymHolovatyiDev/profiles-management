import styled from 'styled-components';

export const MainHeader = styled('header')`
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 120px;
`;

export const UserAvatar = styled('div')`
  height: 48px;
  width: 48px;

  background-color: red;
`;

export const NavigationList = styled('ul')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const NavigationLink = styled('a')`
  color: #14142b;

  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
`;

export const MainPageContainer = styled('div')`
  background-color: #f7f7fc;
`;
