import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

import Modal from 'components/Modal/Modal';
import Spinner from 'components/Spinner/Spinner';
import UserModal from 'components/UsersModal/UsersModal';
import UserDataPanel from 'components/UserDataPanel/UserDataPanel';
import {
  ProfileContainer,
  ProfileTitle,
  ProfileCardsList,
} from 'components/Profiles/Profiles.styled';
import { getCurrentUserData } from 'Redux/currentUser/currentUserSelectors';
import { useCreateProfilesMutation } from 'Redux/services/backendAPI';
import { CurrentUser } from 'components/Types/Types';
import CreateProfileCard from 'components/CreateProfileCard/CreateProfileCard';
import MainProfilesCardsList from 'components/MainProfilesCardsList/MainProfilesCardsList';
import { useProfilesEffect } from 'components/customHooks/profilesHooks';

const Profiles: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showUserModal, setShowUserModal] = useState<boolean>(false);

  const location = useLocation();

  const {
    name: currentUserName,
    email: currentUserEmail,
    role: currentUserRole,
  }: CurrentUser = useSelector(getCurrentUserData);

  const createProfileInitialValues = {
    name: '',
    gender: 'male',
    city: '',
  };

  const isFetching = useProfilesEffect(
    currentUserName,
    showModal,
    showUserModal,
    location
  );

  return (
    <>
      {isFetching ? (
        <Spinner height={80} width={80} containerMargin={true} />
      ) : (
        <ProfileContainer>
          <UserDataPanel
            setShowUserModal={setShowUserModal}
            location={location}
          />

          <ProfileTitle>Profiles:</ProfileTitle>
          <ProfileCardsList>
            <MainProfilesCardsList />

            <CreateProfileCard setShowModal={setShowModal} />
          </ProfileCardsList>
        </ProfileContainer>
      )}

      {showUserModal && (
        <UserModal
          _id={location?.state?._id}
          name={currentUserName}
          email={currentUserEmail}
          role={currentUserRole}
          showModal={setShowUserModal}
        />
      )}

      {showModal && (
        <Modal
          showModal={setShowModal}
          APIfunction={useCreateProfilesMutation}
          initialValues={createProfileInitialValues}
          setUserId={location?.state?._id ?? null}
          invalidate={true}
        />
      )}
    </>
  );
};

export default Profiles;
