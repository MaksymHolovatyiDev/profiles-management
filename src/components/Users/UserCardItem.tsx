import React from 'react';
import { useDispatch } from 'react-redux';

import { UserCard } from 'components/Types/Types';
import { setScrollPosition } from 'Redux/currentUser/currentUserSlice';
import { UserCardContainer, UserCardText } from 'components/Users/Users.styled';
import { PathRoutes } from 'environment/routes';

const UserCardItem: React.FC<UserCard> = ({ _id, name, email, profiles }) => {
  const dispatch = useDispatch();

  const onCardClick = () => {
    dispatch(setScrollPosition(window.scrollY));
  };

  return (
    <UserCardContainer
      to={PathRoutes.RouteDefault}
      state={{ _id }}
      onClick={onCardClick}
    >
      <UserCardText>{name}</UserCardText>
      <UserCardText>{email}</UserCardText>
      <UserCardText>
        {profiles === 1 ? `${profiles} profile` : `${profiles} profiles`}
      </UserCardText>
    </UserCardContainer>
  );
};

export default UserCardItem;
