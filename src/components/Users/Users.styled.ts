import styled from 'styled-components';
import { mainTextBlack, mainGray, white, borderColor, editButton, deleteButton } from 'Theme/Theme';

export const UsersContainer = styled('div')`
  padding: 60px 120px 78px;
`;

export const UserDataContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin-bottom: 60px;
`;

export const UserDataText = styled('p')`
  color: ${mainTextBlack};

  font-family: Poppins;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.5;

  &:last-child {
    font-size: 24px;
  }
`;

export const UserDataBtnsContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;

  margin-top: 5px;
`;

export const UserDataBtn = styled('button')`
  background-color: transparent;

  border: none;

  cursor: pointer;

  &:hover > svg,
  &:focus > svg {
    stroke: ${editButton};
  }
  &:last-child:hover > svg,
  &:last-child:focus > svg {
    stroke: ${deleteButton};
  }
`;

export const UserDataBtnImage = styled('svg')`
  height: 24px;
  width: 24px;

  stroke: ${mainGray};

  transition: stroke 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);
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

  background-color: ${white};

  padding: 30px 0;
  border: 1px solid ${borderColor};
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
