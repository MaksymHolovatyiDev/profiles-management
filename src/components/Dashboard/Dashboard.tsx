import {
  DashboardContainer,
  DashboardTitle,
  DashboardCardsList,
  DashboardCardContainer,
  DashboardCardText,
} from 'components/Dashboard/Dashboard.styled';
import { useEffect, useState } from 'react';
import { backendAPI } from 'Redux/services/backendAPI';
import { IDashboard } from 'Redux/services/backendTypes';

const Dashboard: React.FC = () => {
  const [dasboardData, setDashboardData] = useState<IDashboard>();

  const [trigger, { data }] =
    backendAPI.endpoints.GetDashboardInfo.useLazyQuery();

  useEffect(() => {
    if (data) setDashboardData(data);
  }, [data]);

  useEffect(() => {
    trigger();
  }, []);

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
