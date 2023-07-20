import {
  MainHeader,
  UserAvatar,
  NavigationList,
  NavigationLink,
} from './Header.styled';

export default function Header() {
  return (
    <>
      <MainHeader>
        <UserAvatar />

        <nav>
          <NavigationList>
            <li>
              <NavigationLink>Profiles</NavigationLink>
            </li>
            <li>
              <NavigationLink>DashBoard</NavigationLink>
            </li>
            <li>
              <NavigationLink>Users</NavigationLink>
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
