import React, { useState } from 'react';
import {
  ProfileContainer,
  ProfileTitle,
  ProfileCardsList,
  ProfileCardContainer,
  ProfileAddBtn,
  CreateProfileText,
  ProfileAddBtnImg,
} from 'components/Profiles/Profiles.styled';
import Modal from 'components/Modal/Modal';
import svg from 'Images/symbol-defs.svg';
import ProfilesCardItem from './ProfilesCardItem';

const Profiles: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  console.log(showModal);

  const a = [
    {
      name: 'adfs',
      gender: 'male',
      birthDate: 'asdf',
      city: 'wer',
    },
    {
      name: 'adfs',
      gender: 'male',
      birthDate: 'asdf',
      city: 'wer',
    },
    ,
    {
      name: 'adfs',
      gender: 'male',
      birthDate: 'asdf',
      city: 'wer',
    },
    ,
    {
      name: 'adfs',
      gender: 'male',
      birthDate: 'asdf',
      city: 'wer',
    },
  ];

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <ProfileContainer>
        <ProfileTitle>Profiles:</ProfileTitle>
        <ProfileCardsList>
          {a.map((el, idx: number) => {
            return (
              <li key={idx}>
                <ProfilesCardItem
                  name={el?.name ?? ''}
                  gender={el?.gender ?? ''}
                  birthDate={el?.birthDate ?? ''}
                  city={el?.city ?? ''}
                />
              </li>
            );
          })}
          <li>
            <ProfileCardContainer>
              <ProfileAddBtn onClick={toggleModal}>
                <ProfileAddBtnImg>
                  <use href={`${svg}#icon-Plus-1`}></use>
                </ProfileAddBtnImg>
              </ProfileAddBtn>
              <CreateProfileText>Create new profile</CreateProfileText>
            </ProfileCardContainer>
          </li>
        </ProfileCardsList>
      </ProfileContainer>
      {showModal && <Modal />}
    </>
  );
};

export default Profiles;
