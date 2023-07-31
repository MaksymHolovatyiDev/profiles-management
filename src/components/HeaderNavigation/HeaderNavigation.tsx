import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import svg from 'Images/symbol-defs.svg';
import {
  NavigationList,
  NavigationLink,
  NavigationImg,
  LogoutBtn,
} from './HeaderNavigation.styled';
import {
  resetUser,
  setScrollPosition,
} from 'Redux/currentUser/currentUserSlice';
import { PathRoutes } from 'environment/routes';
import { logOut } from 'Redux/user/userSlice';
import { getAdmin } from 'Redux/user/userSelectors';


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

  return (
    <nav>
      <NavigationList>
        {isAdmin && (
          <>
            <li>
              <NavigationLink to={RouteDefault} onClick={onProfilesLinkClick}>
                Profiles
                <NavigationImg>
                  <use href={`${svg}#icon-person_pin_circle-1`}></use>
                </NavigationImg>
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to={RouteDashboard} onClick={onLinkClick}>
                DashBoard
                <NavigationImg>
                  <use href={`${svg}#icon-dashboard-1`}></use>
                </NavigationImg>
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to={RouteUsers} onClick={onUsersLinkClick}>
                Users
                <NavigationImg>
                  <use href={`${svg}#icon-users-1`}></use>
                </NavigationImg>
              </NavigationLink>
            </li>
          </>
        )}
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