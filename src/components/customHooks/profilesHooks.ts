import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserId } from 'Redux/user/userSelectors';
import { backendAPI } from 'Redux/services/backendAPI';

export function useProfilesEffect(
  name: string,
  showModal: boolean,
  showUserModal: boolean,
  location: any
) {
  const [triggerGetUser] = backendAPI.endpoints.GetCurrentUser.useLazyQuery();
  const [triggerGetProfiles, { isFetching }] =
    backendAPI.endpoints.GetProfiles.useLazyQuery();

  const userId = useSelector(getUserId);

  useEffect(() => {
    if (name) {
      window.scrollTo(0, 0);
    }
  }, [name]);

  useEffect(() => {
    triggerGetProfiles(location?.state?._id ? location?.state?._id : userId);
    if (location?.state?._id) triggerGetUser(location?.state?._id);
  }, [location.state]);

  useEffect(() => {
    document!.body!.style!.overflow =
      showModal || showUserModal ? 'hidden' : 'auto';
  }, [showModal, showUserModal]);

  return isFetching;
}
