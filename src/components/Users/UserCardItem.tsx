import React from 'react';
import { UserCardContainer, UserCardText } from 'components/Users/Users.styled';
import { IUserCard } from 'components/Types/Types';

const UserCardItem: React.FC<IUserCard> = ({
  _id,
  name,
  email,
  profiles,
  admin,
}) => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <UserCardContainer
      to="/"
      onClick={toTop}
      state={{ _id, userData: { name, email, admin } }}
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
