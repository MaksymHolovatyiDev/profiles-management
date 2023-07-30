import React from 'react';
import { useDispatch } from 'react-redux';

import { IUserCard } from 'components/Types/Types';
import { setScrollPosition } from 'Redux/currentUser/currentUserSlice';
import { UserCardContainer, UserCardText } from 'components/Users/Users.styled';

const UserCardItem: React.FC<IUserCard> = ({
  _id,
  name,
  email,
  profiles,
}) => {
  const dispatch = useDispatch();

  const onCardCick = () => {
    dispatch(setScrollPosition(window.scrollY));
  };

  return (
    <UserCardContainer
      to="/"
      state={{ _id }}
      onClick={onCardCick}
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
