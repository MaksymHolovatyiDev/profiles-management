import React, { useEffect, useState } from 'react';
import {
  ProfileCardContainer,
  ProfileCardText,
  ProfileBtnsContainer,
  ProfileBtn,
  ProfileBtnImg,
} from 'components/Profiles/Profiles.styled';
import { ProfileCard } from 'components/Types/Types';
import svg from 'Images/symbol-defs.svg';
import {
  useDeleteProfileMutation,
  useUpdateProfileMutation,
} from 'Redux/services/backendAPI';
import Modal from 'components/Modal/Modal';

const ProfilesCardItem: React.FC<ProfileCard> = ({
  name,
  gender,
  birthDate,
  city,
  id,
}) => {
  const date = new Date(birthDate);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [trigger, { isLoading }] = useDeleteProfileMutation();

  useEffect(() => {
    document!.body!.style!.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  const onProfileEdit = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.currentTarget.blur();
    setShowModal(true);
  };

  const onProfileDelete = async (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.currentTarget.blur();
    if (!isLoading) {
      await trigger(id);
    }
  };

  return (
    <>
      <ProfileCardContainer>
        <ProfileCardText>{name}</ProfileCardText>
        <ProfileCardText>{gender}</ProfileCardText>
        <ProfileCardText>{`${date.getDate()}.${
          date.getMonth() + 1
        }.${date.getFullYear()}`}</ProfileCardText>
        <ProfileCardText>{city}</ProfileCardText>

        <ProfileBtnsContainer>
          <ProfileBtn type="button" onClick={onProfileEdit}>
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

      {showModal && (
        <Modal
          showModal={setShowModal}
          APIfunction={useUpdateProfileMutation}
          initialValues={{ name, gender, city }}
          DateValue={date}
          ProfileID={id}
        />
      )}
    </>
  );
};

export default ProfilesCardItem;
