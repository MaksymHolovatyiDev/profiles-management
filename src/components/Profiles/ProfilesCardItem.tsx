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

const ProfilesCardItem: React.FC<IProfileCard> = ({
  name,
  gender,
  birthDate,
  city,
}) => {
  return (
    <ProfileCardContainer>
      <ProfileCardText>{name}</ProfileCardText>
      <ProfileCardText>{gender}</ProfileCardText>
      <ProfileCardText>{birthDate}</ProfileCardText>
      <ProfileCardText>{city}</ProfileCardText>

      <ProfileBtnsContainer>
        <ProfileBtn>
          edit
          <ProfileBtnImg>
            <use href={`${svg}#icon-Edit-1`}></use>
          </ProfileBtnImg>
        </ProfileBtn>

        <ProfileBtn>
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
