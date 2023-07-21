import styled from 'styled-components';
import { mainTextBlack, mainGray } from 'Theme/Theme.ts';

export const DashboardContainer = styled('div')`
  padding: 0 120px;
  margin: 60px 0 78px;
`;

export const DashboardTitle = styled('p')`
  color: ${mainTextBlack};

  font-family: Poppins;
  font-weight: 400;
  font-size: 36px;
  line-height: 1.41;

  margin-bottom: 60px;
`;

export const DashboardCardsList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
`;

export const DashboardCardContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  background-color: #ffffff;

  padding: 80px 75px;
  border: 1px solid #d6d8e7;
  border-radius: 12px;
`;

export const DashboardCardText = styled('p')`
  color: ${mainGray};

  font-family: Poppins;
  font-weight: 600;
  font-size: 48px;
  line-height: 0.7;

  &:first-child {
    font-weight: 400;
    font-size: 36px;
    line-height: 0.944;
  }
`;
