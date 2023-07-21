import {
  DashboardContainer,
  DashboardTitle,
  DashboardCardsList,
  DashboardCardContainer,
  DashboardCardText,
} from 'components/Dashboard/Dashboard.styled.ts';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard:</DashboardTitle>
      <DashboardCardsList>
        <li>
          <DashboardCardContainer>
            <DashboardCardText>Users:</DashboardCardText>
            <DashboardCardText>13</DashboardCardText>
          </DashboardCardContainer>
        </li>
        <li>
          <DashboardCardContainer>
            <DashboardCardText>Profiles:</DashboardCardText>
            <DashboardCardText>27</DashboardCardText>
          </DashboardCardContainer>
        </li>
        <li>
          <DashboardCardContainer>
            <DashboardCardText>Profiles over 18 years old:</DashboardCardText>
            <DashboardCardText>20</DashboardCardText>
          </DashboardCardContainer>
        </li>
      </DashboardCardsList>
    </DashboardContainer>
  );
}
