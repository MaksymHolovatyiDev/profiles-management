import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  UsersContainer,
  UsersTitle,
  UsersCardsList,
} from 'components/Users/Users.styled';
import UserCardItem from './UserCardItem';
import { getScrollPosition } from 'Redux/currentUser/currentUserSelectors';
import { setScrollPosition } from 'Redux/currentUser/currentUserSlice';
import { useGetAllUsersQuery } from 'Redux/services/backendAPI';

const Users: React.FC = () => {
  const { data } = useGetAllUsersQuery();

  const dispatch = useDispatch();
  const scrollPosition = useSelector(getScrollPosition);

  useEffect(() => {
    if (scrollPosition !== 0 && data?.length !== 0)
      dispatch(setScrollPosition(0));

    window.scrollTo(0, scrollPosition);
  }, []);

  return (
    <>
      <UsersContainer>
        <UsersTitle>Users:</UsersTitle>
        <UsersCardsList>
          {data?.map(el => (
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
