import styled from 'styled-components';
import { mainTextBlack, mainGray } from 'Theme/Theme.ts';

export const UsersContainer = styled('div')`
  padding: 0 120px;
  margin: 60px 0 78px;
`;

export const UsersTitle = styled('p')`
  color: ${mainTextBlack};

  font-family: Poppins;
  font-weight: 400;
  font-size: 36px;
  line-height: 1.41;

  margin-bottom: 54px;
`;

export const UsersCardsList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  row-gap: 60px;
`;

export const UserCardContainer = styled('div')`
  height: 208px;
  width: 396px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  background-color: #ffffff;

  padding: 30px 0;
  border: 1px solid #d6d8e7;
  border-radius: 12px;
`;

export const UserCardText = styled('p')`
  color: ${mainGray};

  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;

  &:first-child {
    font-weight: 500;
  }
`;
