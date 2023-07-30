import { useEffect, useState } from 'react';

import {
  DashboardContainer,
  DashboardTitle,
  DashboardCardsList,
  DashboardCardContainer,
  DashboardCardText,
} from 'components/Dashboard/Dashboard.styled';
import { backendAPI } from 'Redux/services/backendAPI';
import { IDashboard } from 'Redux/services/backendTypes';

const Dashboard: React.FC = () => {
  const [dasboardData, setDashboardData] = useState<IDashboard>();

  const [trigger, { data }] =
    backendAPI.endpoints.GetDashboardInfo.useLazyQuery();

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    if (data) setDashboardData(data);
  }, [data]);

  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard:</DashboardTitle>
      <DashboardCardsList>
        <li>
          <DashboardCardContainer>
            <DashboardCardText>Users:</DashboardCardText>
            <DashboardCardText>{dasboardData?.users ?? ''}</DashboardCardText>
          </DashboardCardContainer>
        </li>
        <li>
          <DashboardCardContainer>
            <DashboardCardText>Profiles:</DashboardCardText>
            <DashboardCardText>
              {dasboardData?.profiles ?? ''}
            </DashboardCardText>
          </DashboardCardContainer>
        </li>
        <li>
          <DashboardCardContainer>
            <DashboardCardText>Profiles over 18 years old:</DashboardCardText>
            <DashboardCardText>{dasboardData?.adult ?? ''}</DashboardCardText>
          </DashboardCardContainer>
        </li>
      </DashboardCardsList>
    </DashboardContainer>
  );
};

export default Dashboard;
