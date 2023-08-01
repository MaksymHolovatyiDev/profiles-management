import styled from 'styled-components';
import { mainTextBlack, mainGray, white, borderColor } from 'Theme/Theme';

export const ProfileContainer = styled('div')`
  padding: 60px 120px 78px;
`;

export const ProfileTitle = styled('p')`
  color: ${mainTextBlack};

  font-family: Poppins;
  font-weight: 400;
  font-size: 36px;
  line-height: 1.41;

  margin-bottom: 60px;
`;

export const ProfileCardsList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: 133px;
  row-gap: 60px;

  & > li:last-child div {
    padding: 0;
    justify-content: center;
  }
`;

export const ProfileCardContainer = styled('div')`
  height: 299px;
  width: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  background-color: ${white};

  padding-top: 35px;
  border: 1px solid ${borderColor};
  border-radius: 12px;

  overflow: hidden;

  &:hover > div,
  &:focus > div {
    transform: translate(0, 0);
  }
`;

export const ProfileCardText = styled('p')`
  color: ${mainGray};

  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;

  &:first-child {
    font-weight: 500;

    margin-bottom: 5px;
  }
`;
