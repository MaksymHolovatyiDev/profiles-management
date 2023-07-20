import {
  ProfileContainer,
  ProfileTitle,
  ProfileCardList,
  ProfileCardContainer,
  ProfileCardNameText,
  ProfileAddBtn,
  CreateProfileText,
} from './Profiles.styled';

export default function Profiles() {
  return (
    <ProfileContainer>
      <ProfileTitle>Profiles:</ProfileTitle>
      <ProfileCardList>
        <li>
          <ProfileCardContainer>
            <ProfileCardNameText>Danylo Bilyi</ProfileCardNameText>
            <p>male</p>
            <p>25.03.2003</p>
            <p>Kyiv</p>
            <button>edit</button>
            <button>delete</button>
          </ProfileCardContainer>
        </li>
        <li>
          <ProfileCardContainer>
            <p>Danylo Bilyi</p>
            <p>male</p>
            <p>25.03.2003</p>
            <p>Kyiv</p>
          </ProfileCardContainer>
        </li>
        <li>
          <ProfileCardContainer>
            <p>Danylo Bilyi</p>
            <p>male</p>
            <p>25.03.2003</p>
            <p>Kyiv</p>
          </ProfileCardContainer>
        </li>
        <li>
          <ProfileCardContainer>
            <p>Danylo Bilyi</p>
            <p>male</p>
            <p>25.03.2003</p>
            <p>Kyiv</p>
          </ProfileCardContainer>
        </li>
        <li>
          <ProfileCardContainer>
            <p>Danylo Bilyi</p>
            <p>male</p>
            <p>25.03.2003</p>
            <p>Kyiv</p>
          </ProfileCardContainer>
        </li>
        <li>
          <ProfileCardContainer>
            <p>Danylo Bilyi</p>
            <p>male</p>
            <p>25.03.2003</p>
            <p>Kyiv</p>
          </ProfileCardContainer>
        </li>
        <li>
          <ProfileCardContainer>
            <p>Danylo Bilyi</p>
            <p>male</p>
            <p>25.03.2003</p>
            <p>Kyiv</p>
          </ProfileCardContainer>
        </li>
        <li>
          <ProfileCardContainer>
            <p>Danylo Bilyi</p>
            <p>male</p>
            <p>25.03.2003</p>
            <p>Kyiv</p>
          </ProfileCardContainer>
        </li>
        <li>
          <ProfileCardContainer>
            <ProfileAddBtn>+</ProfileAddBtn>
            <CreateProfileText>Create new profile</CreateProfileText>
          </ProfileCardContainer>
        </li>
      </ProfileCardList>
    </ProfileContainer>
  );
}
