import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  NavigationList,
  LogoutBtn,
} from 'components/HeaderNavigation/HeaderNavigation.styled';
import {
  resetUser,
  setScrollPosition,
} from 'Redux/currentUser/currentUserSlice';
import { PathRoutes } from 'environment/routes';
import { logOut } from 'Redux/user/userSlice';
import { getAdmin } from 'Redux/user/userSelectors';
import HeaderNavigationLinkItem from './HeaderNavigationLinkItem';

const HeaderNavigation: React.FC = () => {
  const { RouteDashboard, RouteUsers, RouteDefault } = PathRoutes;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAdmin = useSelector(getAdmin);

  const onLinkClick = (evt: any) => {
    evt.currentTarget.blur();
  };

  const onProfilesLinkClick = (evt: any) => {
    evt.currentTarget.blur();
    dispatch(resetUser());
  };

  const onUsersLinkClick = (evt: any) => {
    evt.currentTarget.blur();
    dispatch(setScrollPosition(0));
  };

  const onLogout = (): void => {
    dispatch(resetUser());
    dispatch(logOut());
    navigate(RouteDefault);
    localStorage.removeItem('user');
  };

  const navigationData = [
    {
      route: RouteDefault,
      click: onProfilesLinkClick,
      text: 'Profiles',
      image: 'icon-person_pin_circle-1',
    },
    {
      route: RouteDashboard,
      click: onUsersLinkClick,
      text: 'DashBoard',
      image: 'icon-dashboard-1',
    },
    {
      route: RouteUsers,
      click: onLinkClick,
      text: 'Users',
      image: 'icon-users-1',
    },
  ];

  return (
    <nav>
      <NavigationList>
        {isAdmin &&
          navigationData.map(el => (
            <li key={el.image}>
              <HeaderNavigationLinkItem linkData={el} />
            </li>
          ))}
        <li>
          <LogoutBtn type="button" onClick={onLogout}>
            Log out
          </LogoutBtn>
        </li>
      </NavigationList>
    </nav>
  );
};

export default HeaderNavigation;
