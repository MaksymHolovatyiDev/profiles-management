import React from 'react';
import { UserCardContainer, UserCardText } from 'components/Users/Users.styled';
import { IUserCard } from 'components/Types/Types';

const UserCardItem: React.FC<IUserCard> = ({ name, email, profiles }) => {
  return (
    <UserCardContainer>
      <UserCardText>{name}</UserCardText>
      <UserCardText>{email}</UserCardText>
      <UserCardText>
        {profiles === 1 ? `${profiles} profile` : `${profiles} profiles`}
      </UserCardText>
    </UserCardContainer>
  );
};

export default UserCardItem;
