import React, { useEffect, useState } from 'react';

import {
  ProfileCardContainer,
  ProfileCardText,
} from 'components/Profiles/Profiles.styled';
import { ProfileCard } from 'components/Types/Types';
import { useUpdateProfileMutation } from 'Redux/services/backendAPI';
import Modal from 'components/Modal/Modal';
import ProfileCardItemBtns from 'components/ProfileCardItemBtns/ProfileCardItemBtns';

const ProfilesCardItem: React.FC<ProfileCard> = ({
  name,
  gender,
  birthDate,
  city,
  id,
}) => {
  const date = new Date(birthDate);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    document!.body!.style!.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  return (
    <>
      <ProfileCardContainer>
        <ProfileCardText>{name}</ProfileCardText>
        <ProfileCardText>{gender}</ProfileCardText>
        <ProfileCardText>{`${date.getDate()}.${
          date.getMonth() + 1
        }.${date.getFullYear()}`}</ProfileCardText>
        <ProfileCardText>{city}</ProfileCardText>

        <ProfileCardItemBtns id={id} setShowModal={setShowModal} />
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
