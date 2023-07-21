import {
  MainHeader,
  UserContainer,
  UserAvatar,
  UserName,
  NavigationList,
  NavigationLink,
  NavigationImg,
} from 'components/Header/Header.styled.ts';
import svg from 'Images/symbol-defs.svg';

export default function Header() {
  return (
    <>
      <MainHeader>
        <UserContainer>
          <UserAvatar src={require('Images/admin.png')} alt="User Avater" />
          <UserName>1White</UserName>
        </UserContainer>

        <nav>
          <NavigationList>
            <li>
              <NavigationLink>
                Profiles
                <NavigationImg>
                  <use href={`${svg}#icon-person_pin_circle-1`}></use>
                </NavigationImg>
              </NavigationLink>
            </li>
            <li>
              <NavigationLink>
                DashBoard
                <NavigationImg>
                  <use href={`${svg}#icon-dashboard-1`}></use>
                </NavigationImg>
              </NavigationLink>
            </li>
            <li>
              <NavigationLink>
                Users
                <NavigationImg>
                  <use href={`${svg}#icon-users-1`}></use>
                </NavigationImg>
              </NavigationLink>
            </li>
            <li>
              <NavigationLink>Log out</NavigationLink>
            </li>
          </NavigationList>
        </nav>
      </MainHeader>
    </>
  );
}
