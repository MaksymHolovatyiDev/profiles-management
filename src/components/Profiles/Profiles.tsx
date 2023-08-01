import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

import Modal from 'components/Modal/Modal';
import Spinner from 'components/Spinner/Spinner';
import UserDataPanel from 'components/UserDataPanel/UserDataPanel';
import {
  ProfileContainer,
  ProfileTitle,
  ProfileCardsList,
} from 'components/Profiles/Profiles.styled';
import { getCurrentUserData } from 'Redux/currentUser/currentUserSelectors';
import { CurrentUser } from 'components/Types/Types';
import CreateProfileCard from 'components/CreateProfileCard/CreateProfileCard';
import MainProfilesCardsList from 'components/MainProfilesCardsList/MainProfilesCardsList';
import { useProfilesEffect } from 'components/customHooks/profilesHooks';
import { useCreateProfilesMutation } from 'Redux/services/backendAPI';

const Profiles: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showUserModal, setShowUserModal] = useState<boolean>(false);

  const location = useLocation();
  const { name, email, role }: CurrentUser = useSelector(getCurrentUserData);

  const isFetching = useProfilesEffect(
    name,
    showModal,
    showUserModal,
    location
  );

  const createProfileInitialValues = {
    name: '',
    gender: 'male',
    city: '',
  };

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
        <Modal
          UserModal={true}
          _id={location?.state?._id}
          initialState={{ name, email, role }}
          showModal={setShowUserModal}
        />
      )}

      {showModal && (
        <Modal
          showModal={setShowModal}
          setUserId={location?.state?._id ?? null}
          initialValues={createProfileInitialValues}
          invalidate={true}
          APIfunction={useCreateProfilesMutation}
        />
      )}
    </>
  );
};

export default Profiles;
