import React from 'react';
import {
  UsersContainer,
  UserDataContainer,
  UserDataText,
  UsersTitle,
  UsersCardsList,
  UserDataBtnsContainer,
  UserDataBtn,
  UserDataBtnImage,
} from 'components/Users/Users.styled';
import svg from 'Images/symbol-defs.svg';
import UserModal from 'components/UsersModal/UsersModal';
import UserCardItem from './UserCardItem';

const Users: React.FC = () => {
  const a = [
    { name: 'qwe', email: 'aef', profiles: 1 },
    { name: 'qwe', email: 'aef', profiles: 1 },
    ,
    { name: 'qwe', email: 'aef', profiles: 1 },
    ,
    { name: 'qwe', email: 'aef', profiles: 1 },
    ,
    { name: 'qwe', email: 'aef', profiles: 1 },
  ];
  return (
    <>
      <UsersContainer>
        <UserDataContainer>
          <UserDataText>Sup3r_puper</UserDataText>
          <UserDataText>usermail@outlook.com</UserDataText>
          <UserDataText>user</UserDataText>
          <UserDataBtnsContainer>
            <UserDataBtn type="button">
              <UserDataBtnImage>
                <use href={`${svg}#icon-Edit-1`}></use>
              </UserDataBtnImage>
            </UserDataBtn>
            <UserDataBtn type="button">
              <UserDataBtnImage>
                <use href={`${svg}#icon-Delete-1`}></use>
              </UserDataBtnImage>
            </UserDataBtn>
          </UserDataBtnsContainer>
        </UserDataContainer>

        <UsersTitle>Users:</UsersTitle>
        <UsersCardsList>
          {a.map(el => (
            <li>
              <UserCardItem
                name={el?.name ?? ''}
                email={el?.email ?? ''}
                profiles={el?.profiles ?? 0}
              />
            </li>
          ))}
        </UsersCardsList>
      </UsersContainer>
      <UserModal />
    </>
  );
};

export default Users;
