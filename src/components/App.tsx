import 'reset-css';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from 'Pages/SignIn/SignIn';
import SignUp from 'Pages/SignUp/SignUp';
import MainPage from 'Pages/MainPage/MainPage';
import { getAdmin, getTheme, getToken } from 'Redux/user/userSelectors';
import { GlobalStyles } from 'Theme/GlobalTheme';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from 'Theme/Theme';

const Profiles = lazy(() => import('components/Profiles/Profiles'));
const Users = lazy(() => import('components/Users/Users'));
const Dashboard = lazy(() => import('components/Dashboard/Dashboard'));

const App: React.FC = () => {
  const token = useSelector(getToken);
  const isAdmin = useSelector(getAdmin);
  const theme = useSelector(getTheme);

  const SelectTheme = () => (theme ? LightTheme : DarkTheme);

  return (
    <ThemeProvider theme={SelectTheme}>
      <GlobalStyles />
      <Routes>
        {token ? (
          <>
            <Route path="/" element={<MainPage />}>
              <Route index element={<Profiles />} />
              {isAdmin && <Route path="Users" element={<Users />} />}
              {isAdmin && <Route path="Dashboard" element={<Dashboard />} />}
              <Route path="*" element={<Profiles />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="*" element={<SignIn />} />
          </>
        )}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
