import React from 'react';

import ChangeThemeButton from 'components/ChangeThemeButton/ChangeThemeButton';
import {
  UserContainer,
  UserAvatarImg,
  UserName,
} from 'components/UserAvatar/UserAvatar.styled';
import { useSelector } from 'react-redux';
import { getAdmin, getUserName } from 'Redux/user/userSelectors';

const UserAvatar: React.FC = () => {
  const userName = useSelector(getUserName);
  const isAdmin = useSelector(getAdmin);

  return (
    <UserContainer>
      <UserAvatarImg
        src={require(`Images/${isAdmin ? 'admin' : 'user'}.png`)}
        alt="User Avatar"
      />
      <UserName>{userName}</UserName>
      <ChangeThemeButton />
    </UserContainer>
  );
};

export default UserAvatar;
