import React, { useEffect, useState } from 'react';
import {
  ProfileContainer,
  ProfileTitle,
  ProfileCardsList,
  ProfileCardContainer,
  ProfileAddBtn,
  CreateProfileText,
  ProfileAddBtnImg,
  UserDataContainer,
  UserDataText,
  UserDataBtnsContainer,
  UserDataBtn,
  UserDataBtnImage,
} from 'components/Profiles/Profiles.styled';
import Modal from 'components/Modal/Modal';
import svg from 'Images/symbol-defs.svg';
import ProfilesCardItem from './ProfilesCardItem';
import { IProfileData } from 'Redux/services/backendTypes';
import { backendAPI } from 'Redux/services/backendAPI';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from 'Redux/user/userSelectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllProfiles } from 'Redux/profiles/profilesSelectors';
import UserModal from 'components/UsersModal/UsersModal';
import { logined, updateUser } from 'Redux/usersList/usersListSlice';
import {
  getLogining,
  getUserListData,
} from 'Redux/usersList/userListSelectors';
import Spiner from 'components/Spiner/Spiner';

const Profiles: React.FC = () => {
  const [profiles, setProfiles] = useState<IProfileData[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showUserModal, setShowUserModal] = useState<boolean>(false);

  document!.body!.style!.overflow =
    showModal || showUserModal ? 'hidden' : 'auto';

  const location: any = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const allProfiles = useSelector(getAllProfiles);
  const userId = useSelector(getUserId);
  const userListData = useSelector(getUserListData);
  const isLogining = useSelector(getLogining);
  const [trigger] = backendAPI.endpoints.GetProfiles.useLazyQuery();
  const [triggerDelete] = backendAPI.endpoints.DeleteUser.useLazyQuery();

  const createProfileInitialValues = {
    name: '',
    gender: 'male',
    city: '',
  };

  useEffect(() => {
    if (location?.state?._id) {
      dispatch(
        updateUser({
          name: location?.state?.userData?.name,
          email: location?.state?.userData?.email,
          role: location?.state?.userData?.admin ? 'admin' : 'user',
          userExist: true,
          isPending: true,
          logining: false,
        })
      );
      trigger(location?.state?._id);
    } else {
      trigger(userId);
    }
  }, [location.state]);

  useEffect(() => {
    setProfiles(allProfiles);
  }, [allProfiles]);
  useEffect(() => {
    if (isLogining) {
      dispatch(logined());
      navigate('/', { replace: true });
      window.scrollTo(0, 0);
    }
    if (userListData?.userExist) {
      window.scrollTo(0, 0);
    }
  }, []);

  const toggleModal = (evt: any) => {
    evt.currentTarget.blur();

    setShowModal(prevState => !prevState);
  };

  const toggleUserModal = (evt: any) => {
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
      {userListData.isPending ? (
        <Spiner height={80} width={80} containerMargin={true} />
      ) : (
        <ProfileContainer>
          {userListData.userExist && (
            <UserDataContainer>
              <UserDataText>{userListData.name}</UserDataText>
              <UserDataText>{userListData.email}</UserDataText>
              <UserDataText>{userListData.role}</UserDataText>
              <UserDataBtnsContainer>
                <UserDataBtn type="button" onClick={toggleUserModal}>
                  <UserDataBtnImage>
                    <use href={`${svg}#icon-Edit-1`}></use>
                  </UserDataBtnImage>
                </UserDataBtn>
                <UserDataBtn type="button" onClick={deleteUser}>
                  <UserDataBtnImage>
                    <use href={`${svg}#icon-Delete-1`}></use>
                  </UserDataBtnImage>
                </UserDataBtn>
              </UserDataBtnsContainer>
            </UserDataContainer>
          )}

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
          name={location?.state?.userData?.name}
          email={location?.state?.userData?.email}
          role={location?.state?.userData?.admin}
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
