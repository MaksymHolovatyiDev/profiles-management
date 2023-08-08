import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mainTextBlack, mainGray, white, borderColor } from 'Theme/Theme';

export const UsersContainer = styled('div')`
  padding: 60px 120px 78px;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(396px, 1fr));
  gap: 32px;
  row-gap: 60px;
`;

export const UserCardContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  background-color: ${white};

  padding: 30px 0;
  border: 1px solid ${borderColor};
  border-radius: 12px;

  text-decoration: none;

  &:hover,
  &:focus {
    box-shadow: 2px 4px 3px ${borderColor}aa;
  }
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
