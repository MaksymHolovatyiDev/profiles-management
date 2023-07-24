import 'reset-css';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from 'Pages/SignIn/SignIn';
import SignUp from 'Pages/SignUp/SignUp';
import MainPage from 'Pages/MainPage/MainPage';
import { getAdmin } from 'Redux/selectors';

const Profiles = lazy(() => import('components/Profiles/Profiles'));
const Users = lazy(() => import('components/Users/Users'));
const Dashboard = lazy(() => import('components/Dashboard/Dashboard'));

const App: React.FC = () => {
  const isAdmin = useSelector(getAdmin);

  return (
    <Routes>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/" element={<MainPage />}>
        <Route index element={<Profiles />} />
        {isAdmin && <Route path="Users" element={<Users />} />}
        {isAdmin && <Route path="Dashboard" element={<Dashboard />} />}
        <Route path="*" element={<Profiles />} />
      </Route>
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};

export default App;
