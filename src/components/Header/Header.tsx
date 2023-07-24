import React from 'react';
import { useSelector } from 'react-redux';
import {
  MainHeader,
  UserContainer,
  UserAvatar,
  UserName,
  NavigationList,
  NavigationLink,
  NavigationImg,
} from 'components/Header/Header.styled';
import svg from 'Images/symbol-defs.svg';
import { getAdmin } from 'Redux/selectors';

const Header: React.FC = () => {
  const isAdmin = useSelector(getAdmin);

  return (
    <>
      <MainHeader>
        <UserContainer>
          <UserAvatar src={require('Images/admin.png')} alt="User Avater" />
          <UserName>1White</UserName>
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
              <NavigationLink to="/SignIn" replace>
                Log out
              </NavigationLink>
            </li>
          </NavigationList>
        </nav>
      </MainHeader>
    </>
  );
};

export default Header;
