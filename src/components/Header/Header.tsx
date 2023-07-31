import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import svg from 'Images/symbol-defs.svg';
import {
  MainHeader,
  UserContainer,
  UserAvatar,
  UserName,
  NavigationList,
  NavigationLink,
  NavigationImg,
  LogoutBtn,
  ThemeContainer,
  ThemeInput,
  ThemeCusomInput,
  ThemeImg,
} from 'components/Header/Header.styled';
import {
  resetUser,
  setScrollPosition,
} from 'Redux/currentUser/currentUserSlice';
import { PathRoutes } from 'environment/routes';
import { changeTheme, logOut } from 'Redux/user/userSlice';
import { getAdmin, getTheme, getUserName } from 'Redux/user/userSelectors';

const Header: React.FC = () => {
  const { RouteDashboard, RouteUsers, RouteDefault } = PathRoutes;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Theme = useSelector(getTheme);
  const isAdmin = useSelector(getAdmin);
  const userName = useSelector(getUserName);

  /////////////////////////////////      ButtonsClicks    ////////////////////////////////

  const onThemeClick = (evt: any) => {
    dispatch(changeTheme(evt.target.checked));
  };

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
    <>
      <MainHeader>
        <UserContainer>
          <UserAvatar
            src={require(`Images/${isAdmin ? 'admin' : 'user'}.png`)}
            alt="User Avater"
          />
          <UserName>{userName}</UserName>
          <ThemeContainer>
            <ThemeInput
              type={'checkbox'}
              defaultChecked={Theme}
              onClick={onThemeClick}
            />
            <ThemeCusomInput>
              <ThemeImg>
                <use href={`${svg}#icon-wb_sunny`}></use>
                <use href={`${svg}#icon-moon`}></use>
              </ThemeImg>
            </ThemeCusomInput>
          </ThemeContainer>
        </UserContainer>

        <nav>
          <NavigationList>
            {isAdmin && (
              <>
                <li>
                  <NavigationLink
                    to={RouteDefault}
                    onClick={onProfilesLinkClick}
                  >
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
      </MainHeader>
    </>
  );
};

export default Header;
