import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Spiner from 'components/Spiner/Spiner';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={<Spiner height={80} width={80} containerMargin={true} />}
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainPage;
