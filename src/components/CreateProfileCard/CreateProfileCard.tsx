import React from 'react';

import svg from 'Images/symbol-defs.svg';
import {
  ProfileAddBtn,
  CreateProfileText,
  ProfileAddBtnImg,
} from 'components/CreateProfileCard/CreateProfileCard.styled';
import { ProfileCardContainer } from 'components/Profiles/Profiles.styled';

const CreateProfileCard: React.FC<any> = ({ setShowModal }) => {
  const toggleModal = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.currentTarget.blur();

    setShowModal((prevState: boolean) => !prevState);
  };

  return (
    <li>
      <ProfileCardContainer>
        <ProfileAddBtn type="button" onClick={toggleModal}>
          <ProfileAddBtnImg>
            <use href={`${svg}#icon-Plus-1`}></use>
          </ProfileAddBtnImg>
        </ProfileAddBtn>
        <CreateProfileText>Create new profile</CreateProfileText>
      </ProfileCardContainer>
    </li>
  );
};

export default CreateProfileCard;
