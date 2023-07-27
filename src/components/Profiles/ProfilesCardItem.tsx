import React from 'react';
import {
  ProfileCardContainer,
  ProfileCardText,
  ProfileBtnsContainer,
  ProfileBtn,
  ProfileBtnImg,
} from 'components/Profiles/Profiles.styled';
import { IProfileCard } from 'components/Types/Types';
import svg from 'Images/symbol-defs.svg';
import { backendAPI } from 'Redux/services/backendAPI';

const ProfilesCardItem: React.FC<IProfileCard> = ({
  name,
  gender,
  birthDate,
  city,
  id,
}) => {
  const [trigger, { isLoading }] =
    backendAPI.endpoints.DeleteProfile.useLazyQuery();

  const date = new Date(birthDate);

  const onProfileDelete = async (evt: any) => {
    evt.currentTarget.blur();
    if (!isLoading) {
      await trigger(id);
    }
  };

  return (
    <ProfileCardContainer>
      <ProfileCardText>{name}</ProfileCardText>
      <ProfileCardText>{gender}</ProfileCardText>
      <ProfileCardText>{`${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`}</ProfileCardText>
      <ProfileCardText>{city}</ProfileCardText>

      <ProfileBtnsContainer>
        <ProfileBtn type="button">
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
    </ProfileCardContainer>
  );
};

export default ProfilesCardItem;
