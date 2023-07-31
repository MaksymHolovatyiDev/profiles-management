import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import svg from 'Images/symbol-defs.svg';
import Modal from 'components/Modal/Modal';
import Spinner from 'components/Spinner/Spinner';
import UserModal from 'components/UsersModal/UsersModal';
import UserDataPanel from 'components/UserDataPanel/UserDataPanel';
import ProfilesCardItem from './ProfilesCardItem';
import {
  ProfileContainer,
  ProfileTitle,
  ProfileCardsList,
  ProfileCardContainer,
  ProfileAddBtn,
  CreateProfileText,
  ProfileAddBtnImg,
} from 'components/Profiles/Profiles.styled';
import { getCurrentUserData } from 'Redux/currentUser/currentUserSelectors';
import { getUserId } from 'Redux/user/userSelectors';
import {
  backendAPI,
  useCreateProfilesMutation,
  useDeleteUserMutation,
} from 'Redux/services/backendAPI';
import { CurrentUser } from 'components/Types/Types';
import { getAllProfiles } from 'Redux/profiles/profilesSelectors';

const Profiles: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showUserModal, setShowUserModal] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  const userId = useSelector(getUserId);
  const profiles = useSelector(getAllProfiles);
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

  const [triggerDelete] = useDeleteUserMutation();
  const [triggerGetProfiles, { isFetching }] =
    backendAPI.endpoints.GetProfiles.useLazyQuery();
  const [triggerGetUser] = backendAPI.endpoints.GetCurrentUser.useLazyQuery();

  /////////////////////////////////      useEffects    ////////////////////////////////
  useEffect(() => {
    if (currentUserName) {
      window.scrollTo(0, 0);
    }
  }, [currentUserName]);

  useEffect(() => {
    triggerGetProfiles(location?.state?._id ? location?.state?._id : userId);
    if (location?.state?._id) triggerGetUser(location?.state?._id);
  }, [location.state]);

  useEffect(() => {
    document!.body!.style!.overflow =
      showModal || showUserModal ? 'hidden' : 'auto';
  }, [showModal, showUserModal]);

  /////////////////////////////////      ButtonsClicks    ////////////////////////////////

  const toggleModal = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.currentTarget.blur();

    setShowModal(prevState => !prevState);
  };

  const toggleUserModal = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.currentTarget.blur();
    setShowUserModal(prevState => !prevState);
  };

  const deleteUser = async (evt: any) => {
    evt.currentTarget.disabled = true;
    await triggerDelete(location?.state?._id);
    navigate('/users');
  };

  return (
    <>
      {isFetching ? (
        <Spinner height={80} width={80} containerMargin={true} />
      ) : (
        <ProfileContainer>
          <UserDataPanel
            toggleUserModal={toggleUserModal}
            deleteUser={deleteUser}
          />

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
                <ProfileAddBtn type="button" onClick={toggleModal}>
                  <ProfileAddBtnImg>
                    <use href={`${svg}#icon-Plus-1`}></use>
                  </ProfileAddBtnImg>
                </ProfileAddBtn>
                <CreateProfileText>Create new profile</CreateProfileText>
              </ProfileCardContainer>
            </li>
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
