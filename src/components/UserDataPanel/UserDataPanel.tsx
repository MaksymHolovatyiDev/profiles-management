import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import svg from 'Images/symbol-defs.svg';
import {
  UserDataContainer,
  UserDataText,
  UserDataBtnsContainer,
  UserDataBtn,
  UserDataBtnImage,
} from 'components/UserDataPanel/UserDataPanel.styled';
import {CurrentUser} from 'components/Types/Types';
import {getCurrentUserData} from 'Redux/currentUser/currentUserSelectors';
import {useDeleteUserMutation} from 'Redux/services/backendAPI';
import {PathRoutes} from 'environment/routes';

const UserDataPanel: React.FC<any> = ({setShowUserModal, location}) => {
  const [triggerDelete] = useDeleteUserMutation();

  const navigate = useNavigate();

  const {name, email, role}: CurrentUser = useSelector(getCurrentUserData);

  const toggleUserModal = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    evt.currentTarget.blur();
    setShowUserModal((prevState: boolean) => !prevState);
  };

  const deleteUser = async (evt: any) => {
    evt.currentTarget.disabled = true;
    await triggerDelete(location?.state?._id);
    navigate(PathRoutes.RouteUsers);
  };

  return (
    <>
      {name && (
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
