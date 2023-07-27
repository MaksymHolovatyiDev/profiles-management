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
} from 'components/Header/Header.styled';
import svg from 'Images/symbol-defs.svg';
import { getAdmin, getUserName } from 'Redux/user/userSelectors';
import { logOut } from 'Redux/user/userSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const userName = useSelector(getUserName);
  const isAdmin = useSelector(getAdmin);

  const onLogout = (): void => {
    dispatch(logOut());
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
        </UserContainer>

        <nav>
          <NavigationList>
            {isAdmin && (
              <>
                <li>
                  <NavigationLink to="/">
                    Profiles
                    <NavigationImg>
                      <use href={`${svg}#icon-person_pin_circle-1`}></use>
                    </NavigationImg>
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/Dashboard">
                    DashBoard
                    <NavigationImg>
                      <use href={`${svg}#icon-dashboard-1`}></use>
                    </NavigationImg>
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/Users">
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
