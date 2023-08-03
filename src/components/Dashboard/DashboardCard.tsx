import React from 'react';

import {
  DashboardCardContainer,
  DashboardCardText,
} from 'components/Dashboard/Dashboard.styled';
import { DashboardCardType } from 'components/Types/Types';

const DashboardCard: React.FC<DashboardCardType> = ({ DashboardCardData }) => {
  const { name, value } = DashboardCardData;
  return (
    <DashboardCardContainer>
      <DashboardCardText>{name}:</DashboardCardText>
      <DashboardCardText>{value}</DashboardCardText>
    </DashboardCardContainer>
  );
};

export default DashboardCard;
