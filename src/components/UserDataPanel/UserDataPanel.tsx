import React from 'react';
import { useSelector } from 'react-redux';

import svg from 'Images/symbol-defs.svg';
import {
  UserDataContainer,
  UserDataText,
  UserDataBtnsContainer,
  UserDataBtn,
  UserDataBtnImage,
} from './UserDataPanel.styled';
import { CurrentUser } from 'components/Types/Types';
import { getCurrentUserData } from 'Redux/currentUser/currentUserSelectors';

const UserDataPanel: React.FC<any> = ({ toggleUserModal, deleteUser }) => {
  const { name, email, role, userExist }: CurrentUser =
    useSelector(getCurrentUserData);

  return (
    <>
      {userExist && (
        <UserDataContainer>
          <UserDataText>{name}</UserDataText>
          <UserDataText>{email}</UserDataText>
          <UserDataText>{role}</UserDataText>
          <UserDataBtnsContainer>
            <UserDataBtn type="button" onClick={toggleUserModal}>
              <UserDataBtnImage>
                <use href={`${svg}#icon-Edit-1`}></use>
              </UserDataBtnImage>
            </UserDataBtn>
            <UserDataBtn type="button" onClick={deleteUser}>
              <UserDataBtnImage>
                <use href={`${svg}#icon-Delete-1`}></use>
              </UserDataBtnImage>
            </UserDataBtn>
          </UserDataBtnsContainer>
        </UserDataContainer>
      )}
    </>
  );
};

export default UserDataPanel;
