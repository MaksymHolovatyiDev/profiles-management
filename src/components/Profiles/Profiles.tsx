import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import svg from 'Images/symbol-defs.svg';
import Modal from 'components/Modal/Modal';
import Spiner from 'components/Spiner/Spiner';
import UserModal from 'components/UsersModal/UsersModal';
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
import {
  getLogining,
  getCurrentUserData,
} from 'Redux/currentUser/currentUserSelectors';
import { logined } from 'Redux/currentUser/currentUserSlice';
import { getUserId } from 'Redux/user/userSelectors';
import { backendAPI } from 'Redux/services/backendAPI';
import { ICurentUser } from 'components/Types/Types';
import { IProfileData } from 'Redux/services/backendTypes';
import { getAllProfiles } from 'Redux/profiles/profilesSelectors';
import UserDataPanel from 'components/UserDataPanel/UserDataPanel';

const Profiles: React.FC = () => {
  const [profiles, setProfiles] = useState<IProfileData[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showUserModal, setShowUserModal] = useState<boolean>(false);

  const [trigger] = backendAPI.endpoints.GetProfiles.useLazyQuery();
  const [triggerGetUser] = backendAPI.endpoints.GetCurrentUser.useLazyQuery();
  const [triggerDelete] = backendAPI.endpoints.DeleteUser.useLazyQuery();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();

  const userId = useSelector(getUserId);
  const isLogining = useSelector(getLogining);
  const allProfiles = useSelector(getAllProfiles);
  const {
    name: curentUserName,
    email: curentUserEmail,
    role: curentUserRole,
    isPending,
    userExist,
  }: ICurentUser = useSelector(getCurrentUserData);

  const createProfileInitialValues = {
    name: '',
    gender: 'male',
    city: '',
  };

  /////////////////////////////////      useEffects    ////////////////////////////////

  useEffect(() => {
    if (isLogining) {
      dispatch(logined());
      navigate('/', { replace: true });
    }

    if (userExist || isLogining) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (location?.state?._id) {
      const { _id } = location.state;
      triggerGetUser(_id);
      trigger(_id);
    } else {
      trigger(userId);
    }
  }, [location.state]);

  useEffect(() => {
    setProfiles(allProfiles);
  }, [allProfiles]);

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
    evt.currentTarget.diasabled = true;
    await triggerDelete(location?.state?._id);
    navigate('/users');
  };

  return (
    <>
      {isPending ? (
        <Spiner height={80} width={80} containerMargin={true} />
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
          name={curentUserName}
          email={curentUserEmail}
          role={curentUserRole}
          showModal={setShowUserModal}
        />
      )}

      {showModal && (
        <Modal
          showModal={setShowModal}
          APIfunction={backendAPI.endpoints.CreateProfiles.useLazyQuery}
          initialValues={createProfileInitialValues}
          setUserId={location?.state?._id ?? null}
        />
      )}
    </>
  );
};

export default Profiles;
