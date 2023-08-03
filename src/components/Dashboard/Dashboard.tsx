import React from 'react';

import {
  DashboardContainer,
  DashboardTitle,
  DashboardCardsList,
} from 'components/Dashboard/Dashboard.styled';
import { useGetDashboardInfoQuery } from 'Redux/services/backendAPI';
import DashboardCard from './DashboardCard';

const Dashboard: React.FC = () => {
  const { data } = useGetDashboardInfoQuery();

  const mainData = [
    { name: 'Users', value: data?.users ?? '' },
    { name: 'Profiles', value: data?.profiles ?? '' },
    { name: 'Profiles over 18 years old', value: data?.adult ?? '' },
  ];

  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard:</DashboardTitle>
      <DashboardCardsList>
        {mainData.map(el => (
          <li key={el.name}>
            <DashboardCard DashboardCardData={el} />
          </li>
        ))}
      </DashboardCardsList>
    </DashboardContainer>
  );
};

export default Dashboard;
