import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import svg from 'Images/symbol-defs.svg';
import { getAdmin, getTheme, getUserName } from 'Redux/user/userSelectors';
import { changeTheme, logOut } from 'Redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { resetUser } from 'Redux/usersList/usersListSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const userName = useSelector(getUserName);
  const isAdmin = useSelector(getAdmin);
  const Theme = useSelector(getTheme);

  const navigate = useNavigate();

  const onThemeClick = (evt: any) => {
    dispatch(changeTheme(evt.target.checked));
  };

  const onProfilesLinkClick = (evt: any) => {
    evt.currentTarget.blur();
    dispatch(resetUser());
  };

  const onLinkClick = (evt: any) => {
    evt.currentTarget.blur();
  };

  const onLogout = (): void => {
    dispatch(resetUser());
    dispatch(logOut());
    navigate('/');
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
                  <NavigationLink to="/" onClick={onProfilesLinkClick}>
                    Profiles
                    <NavigationImg>
                      <use href={`${svg}#icon-person_pin_circle-1`}></use>
                    </NavigationImg>
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/Dashboard" onClick={onLinkClick}>
                    DashBoard
                    <NavigationImg>
                      <use href={`${svg}#icon-dashboard-1`}></use>
                    </NavigationImg>
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/Users" onClick={onLinkClick}>
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
