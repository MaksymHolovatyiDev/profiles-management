import {
  UsersContainer,
  UsersTitle,
  UsersCardsList,
  UserCardContainer,
  UserCardText,
} from 'components/Users/Users.styled.ts';

export default function Users() {
  return (
    <UsersContainer>
      <UsersTitle>Users:</UsersTitle>
      <UsersCardsList>
        <li>
          <UserCardContainer>
            <UserCardText>1White</UserCardText>
            <UserCardText>danilo.bilyi@gmail.com</UserCardText>
            <UserCardText>3 profiles</UserCardText>
          </UserCardContainer>
        </li>
        <li>
          <UserCardContainer>
            <UserCardText>1White</UserCardText>
            <UserCardText>danilo.bilyi@gmail.com</UserCardText>
            <UserCardText>3 profiles</UserCardText>
          </UserCardContainer>
        </li>
        <li>
          <UserCardContainer>
            <UserCardText>1White</UserCardText>
            <UserCardText>danilo.bilyi@gmail.com</UserCardText>
            <UserCardText>3 profiles</UserCardText>
          </UserCardContainer>
        </li>
        <li>
          <UserCardContainer>
            <UserCardText>1White</UserCardText>
            <UserCardText>danilo.bilyi@gmail.com</UserCardText>
            <UserCardText>3 profiles</UserCardText>
          </UserCardContainer>
        </li>
      </UsersCardsList>
    </UsersContainer>
  );
}
