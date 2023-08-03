import React from 'react';

import svg from 'Images/symbol-defs.svg';
import {
  ProfileBtnsContainer,
  ProfileBtn,
  ProfileBtnImg,
} from 'components/ProfileCardItemBtns/ProfileCardItemBtns.styled';
import { ProfilesBtnsCardProps } from 'components/Types/Types';
import { useDeleteProfileMutation } from 'Redux/services/backendAPI';

const ProfileCardItemBtns: React.FC<ProfilesBtnsCardProps> = ({setShowModal, id}) => {
  const [trigger, { isLoading }] = useDeleteProfileMutation();

  const onProfileEdit = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.currentTarget.blur();
    setShowModal(true);
  };

  const onProfileDelete = async (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.currentTarget.blur();
    if (!isLoading) {
      await trigger(id);
    }
  };

  return (
    <ProfileBtnsContainer>
      <ProfileBtn type="button" onClick={onProfileEdit}>
        edit
        <ProfileBtnImg>
          <use href={`${svg}#icon-Edit-1`}></use>
        </ProfileBtnImg>
      </ProfileBtn>

      <ProfileBtn type="button" onClick={onProfileDelete}>
        delete
        <ProfileBtnImg>
          <use href={`${svg}#icon-Delete-1`}></use>
        </ProfileBtnImg>
      </ProfileBtn>
    </ProfileBtnsContainer>
  );
};

export default ProfileCardItemBtns;
