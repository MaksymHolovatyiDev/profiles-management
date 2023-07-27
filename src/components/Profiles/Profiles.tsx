import React, { useEffect, useState } from 'react';
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
import { profileData } from 'Redux/services/backendTypes';
import { backendAPI } from 'Redux/services/backendAPI';
import { useSelector } from 'react-redux';
import { getUserId } from 'Redux/user/userSelectors';
import { getAllProfiles } from 'Redux/profiles/profilesSelectors';

const Profiles: React.FC = () => {
  const [profiles, setProfiles] = useState<profileData[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  document!.body!.style!.overflow = showModal ? 'hidden' : 'auto';

  const userId = useSelector(getUserId);
  const allProfiles = useSelector(getAllProfiles);
  const [trigger] = backendAPI.endpoints.GetProfiles.useLazyQuery();

  useEffect(() => {
    trigger(userId);
  }, []);

  useEffect(() => {
    setProfiles(allProfiles);
  }, [allProfiles]);

  const toggleModal = (evt: any) => {
    evt.currentTarget.blur();
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <ProfileContainer>
        <ProfileTitle>Profiles:</ProfileTitle>
        <ProfileCardsList>
          {profiles.map(el => {
            return (
              <li key={el._id}>
                <ProfilesCardItem
                  name={el?.name ?? ''}
                  gender={el?.gender ?? ''}
                  birthDate={`${el?.birthdate}` ?? ''}
                  city={el?.city ?? ''}
                  id={el?._id ?? ''}
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
      {showModal && <Modal showModal={setShowModal} />}
    </>
  );
};

export default Profiles;
