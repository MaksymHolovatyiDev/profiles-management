import React, { useEffect, useState } from 'react';
import {
  UsersContainer,
  UsersTitle,
  UsersCardsList,
} from 'components/Users/Users.styled';
import UserCardItem from './UserCardItem';
import { backendAPI } from 'Redux/services/backendAPI';
import { IUser } from 'Redux/services/backendTypes';

const Users: React.FC = () => {
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const [trigger, { data }] = backendAPI.endpoints.GetAllUsers.useLazyQuery();

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    if (data) setUsersList(data);
  }, [data]);

  return (
    <>
      <UsersContainer>
        <UsersTitle>Users:</UsersTitle>
        <UsersCardsList>
          {usersList.map(el => (
            <li key={el._id}>
              <UserCardItem
                _id={el?._id ?? ''}
                name={el?.name ?? ''}
                email={el?.email ?? ''}
                admin={el?.admin ?? ''}
                profiles={el?.profiles ?? 0}
              />
            </li>
          ))}
        </UsersCardsList>
      </UsersContainer>
      
    </>
  );
};

export default Users;
