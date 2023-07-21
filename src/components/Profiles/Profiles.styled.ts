import styled from 'styled-components';
import { mainTextBlack, mainGray } from 'Theme/Theme.ts';

export const ProfileContainer = styled('div')`
  padding: 0 120px;
  margin: 60px 0 78px;
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

  background-color: #ffffff;

  padding-top: 35px;
  border: 1px solid #d6d8e7;
  border-radius: 12px;

  overflow: hidden;

  &:hover > div {
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

export const ProfileBtnsContainer = styled('div')`
  height: 40px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  border: none;
  border-top: 1px solid #d6d8e7;
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

  &:hover:first-child {
    background-color: #624af2;
    color: #fcfcfc;
  }

  &:hover:last-child {
    background-color: #eb0055;
    color: #fcfcfc;
  }

  &:hover > svg {
    stroke: #fcfcfc;
  }

  &:first-child {
    border-right: 1px solid #d6d8e7;
  }
`;

export const ProfileBtnImg = styled('svg')`
  height: 18px;
  width: 18px;

  stroke: ${mainGray};

  margin-left: 7px;

  transition: stroke 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);
`;

export const CreateProfileText = styled('p')`
  color: ${mainGray};

  font-family: Poppins;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
`;

export const ProfileAddBtn = styled('button')`
  height: 70px;
  width: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Poppins;
  font-size: 42px;

  color: #4e4b66;
  background-color: transparent;

  border: 1px solid ${mainGray};
  border-radius: 100%;
  margin-bottom: 30px;

  transition: background-color 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);

  cursor: pointer;

  &:hover {
    background-color: #98f542;
  }

  &:hover > svg {
    stroke: #fcfcfc;
  }
`;

export const ProfileAddBtnImg = styled('svg')`
  height: 42px;
  width: 42px;

  stroke: ${mainGray};

  transition: stroke 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);
`;
