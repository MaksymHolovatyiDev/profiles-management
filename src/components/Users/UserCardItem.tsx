import React from 'react';
import { IUserCard } from 'components/Types/Types';
import { UserCardContainer, UserCardText } from 'components/Users/Users.styled';
import { useDispatch } from 'react-redux';
import { setScrollPosition } from 'Redux/usersList/usersListSlice';

const UserCardItem: React.FC<IUserCard> = ({
  _id,
  name,
  email,
  profiles,
  admin,
}) => {
  const dispatch = useDispatch();

  const onCardCick = () => {
  dispatch(setScrollPosition(window.scrollY));
}

  return (
    <UserCardContainer
      to="/"
      state={{ _id, userData: { name, email, admin } }}
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
