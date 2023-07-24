import {
  DashboardContainer,
  DashboardTitle,
  DashboardCardsList,
  DashboardCardContainer,
  DashboardCardText,
} from 'components/Dashboard/Dashboard.styled';
import { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {
  const [dasboardData, setDashboardData] = useState<{
    Users: number;
    Profiles: number;
    AdultProfiles: number;
  }>({ Users: 10, Profiles: 25, AdultProfiles: 6 });

  useEffect(() => {
    setDashboardData({ Users: 10, Profiles: 25, AdultProfiles: 6 });
  }, []);

  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard:</DashboardTitle>
      <DashboardCardsList>
        <li>
          <DashboardCardContainer>
            <DashboardCardText>Users:</DashboardCardText>
            <DashboardCardText>{dasboardData.Users}</DashboardCardText>
          </DashboardCardContainer>
        </li>
        <li>
          <DashboardCardContainer>
            <DashboardCardText>Profiles:</DashboardCardText>
            <DashboardCardText>{dasboardData.Profiles}</DashboardCardText>
          </DashboardCardContainer>
        </li>
        <li>
          <DashboardCardContainer>
            <DashboardCardText>Profiles over 18 years old:</DashboardCardText>
            <DashboardCardText>{dasboardData.AdultProfiles}</DashboardCardText>
          </DashboardCardContainer>
        </li>
      </DashboardCardsList>
    </DashboardContainer>
  );
};

export default Dashboard;
