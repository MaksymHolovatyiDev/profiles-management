import React from 'react';

import {
  DashboardContainer,
  DashboardTitle,
  DashboardCardsList,
  DashboardCardContainer,
  DashboardCardText,
} from 'components/Dashboard/Dashboard.styled';
import { useGetDashboardInfoQuery } from 'Redux/services/backendAPI';

const Dashboard: React.FC = () => {
  const { data } = useGetDashboardInfoQuery();

  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard:</DashboardTitle>
      <DashboardCardsList>
        <li>
          <DashboardCardContainer>
            <DashboardCardText>Users:</DashboardCardText>
            <DashboardCardText>{data?.users ?? ''}</DashboardCardText>
          </DashboardCardContainer>
        </li>
        <li>
          <DashboardCardContainer>
            <DashboardCardText>Profiles:</DashboardCardText>
            <DashboardCardText>{data?.profiles ?? ''}</DashboardCardText>
          </DashboardCardContainer>
        </li>
        <li>
          <DashboardCardContainer>
            <DashboardCardText>Profiles over 18 years old:</DashboardCardText>
            <DashboardCardText>{data?.adult ?? ''}</DashboardCardText>
          </DashboardCardContainer>
        </li>
      </DashboardCardsList>
    </DashboardContainer>
  );
};

export default Dashboard;
