import styled from 'styled-components';

export const ProfileContainer = styled('div')`
  padding: 0 120px;
  margin: 60px 0 78px;
`;

export const ProfileTitle = styled('p')`
  color: #14142b;

  font-family: Poppins;
  font-weight: 400;
  font-size: 36px;
  line-height: 1.41;

  margin-bottom: 60px;
`;

export const ProfileCardList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: 133px;
  row-gap: 60px;
`;

export const ProfileCardContainer = styled('div')`
  height: 299px;
  width: 320px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;

  border: 1px solid #d6d8e7;
  border-radius: 12px;
`;

export const ProfileCardNameText = styled('p')`
  color: #4e4b66;

  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
`;

export const CreateProfileText = styled('p')`
  color: #4e4b66;

  font-family: Poppins;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
`;

export const ProfileAddBtn = styled('button')`
  height: 70px;
  width: 70px;

  font-family: Poppins;
  font-size: 42px;

  color: #4e4b66;
  background-color: transparent;

  border: 1px solid #4e4b66;
  border-radius: 100%;
  margin-bottom: 30px;
`;
