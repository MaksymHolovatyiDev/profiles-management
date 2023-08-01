import React from 'react';
import { useSelector } from 'react-redux';

import ProfilesCardItem from 'components/Profiles/ProfilesCardItem';
import { getAllProfiles } from 'Redux/profiles/profilesSelectors';

const MainProfilesCardsList: React.FC = () => {
  const profiles = useSelector(getAllProfiles);

  return (
    <>
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
    </>
  );
};

export default MainProfilesCardsList;
