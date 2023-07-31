import React from 'react';

import UserAvatar from 'components/UserAvatar/UserAvatar';
import HeaderNavigation from 'components/HeaderNavigation/HeaderNavigation';
import { MainHeader } from 'components/Header/Header.styled';

const Header: React.FC = () => {
  return (
    <MainHeader>
      <UserAvatar />
      <HeaderNavigation />
    </MainHeader>
  );
};

export default Header;
