import 'reset-css';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainPage from 'Pages/MainPage/MainPage';
import { getAdmin, getTheme, getToken } from 'Redux/user/userSelectors';
import { GlobalStyles } from 'Theme/GlobalTheme';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from 'Theme/Theme';
import { PathRoutes } from 'environment/routes';
import Authorization from 'Pages/Authorization/Authorization';

const Profiles = lazy(() => import('components/Profiles/Profiles'));
const Users = lazy(() => import('components/Users/Users'));
const Dashboard = lazy(() => import('components/Dashboard/Dashboard'));

const App: React.FC = () => {
  const { RouteDashboard, RouteUsers, RouteDefault } = PathRoutes;

  const token = useSelector(getToken);
  const theme = useSelector(getTheme);
  const isAdmin = useSelector(getAdmin);

  const SelectTheme = () => (theme ? LightTheme : DarkTheme);

  return (
    <ThemeProvider theme={SelectTheme}>
      <GlobalStyles />
      <Routes>
        {token ? (
          <>
            <Route path={RouteDefault} element={<MainPage />}>
              <Route index element={<Profiles />} />
              {isAdmin && <Route path={RouteUsers} element={<Users />} />}
              {isAdmin && (
                <Route path={RouteDashboard} element={<Dashboard />} />
              )}
              <Route path="*" element={<Profiles />} />
            </Route>
          </>
        ) : (
          <Route path="*" element={<Authorization />} />
        )}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
