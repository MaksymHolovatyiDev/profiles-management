import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  UsersContainer,
  UsersTitle,
  UsersCardsList,
} from 'components/Users/Users.styled';
import { IUser } from 'Redux/services/backendTypes';
import UserCardItem from './UserCardItem';
import { backendAPI } from 'Redux/services/backendAPI';
import { getScrollPosition } from 'Redux/currentUser/currentUserSelectors';
import { setScrollPosition } from 'Redux/currentUser/currentUserSlice';

const Users: React.FC = () => {
  const [usersList, setUsersList] = useState<IUser[]>([]);

  const [trigger, { data }] = backendAPI.endpoints.GetAllUsers.useLazyQuery();

  const dispatch = useDispatch();
  const scrollPosition = useSelector(getScrollPosition);

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    if (data) {
      setUsersList(data);
    }
  }, [data]);

  useEffect(() => {
    if (scrollPosition !== 0 && usersList.length !== 0)
      dispatch(setScrollPosition(0));

    window.scrollTo(0, scrollPosition);
  }, [usersList]);

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
