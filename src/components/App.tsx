import 'reset-css';
import React, { lazy, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from 'Pages/SignIn/SignIn';
import SignUp from 'Pages/SignUp/SignUp';
import MainPage from 'Pages/MainPage/MainPage';
import { getAdmin, getToken } from 'Redux/user/userSelectors';

const Profiles = lazy(() => import('components/Profiles/Profiles'));
const Users = lazy(() => import('components/Users/Users'));
const Dashboard = lazy(() => import('components/Dashboard/Dashboard'));

const App: React.FC = () => {
  const token = useSelector(getToken);
  const isAdmin = useSelector(getAdmin);

  const navigete = useNavigate();

  useEffect(() => {
    navigete('/');
  }, [token]);

  return (
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
  );
};

export default App;
