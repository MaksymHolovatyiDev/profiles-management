import {
  ProfileContainer,
  ProfileTitle,
  ProfileCardsList,
  ProfileCardContainer,
  ProfileCardText,
  ProfileBtnsContainer,
  ProfileBtn,
  ProfileBtnImg,
  ProfileAddBtn,
  CreateProfileText,
  ProfileAddBtnImg,
} from 'components/Profiles/Profiles.styled.ts';
import svg from 'Images/symbol-defs.svg';

export default function Profiles() {
  return (
    <ProfileContainer>
      <ProfileTitle>Profiles:</ProfileTitle>
      <ProfileCardsList>
        <li>
          <ProfileCardContainer>
            <ProfileCardText>Danylo Bilyi</ProfileCardText>
            <ProfileCardText>male</ProfileCardText>
            <ProfileCardText>25.03.2003</ProfileCardText>
            <ProfileCardText>Kyiv</ProfileCardText>

            <ProfileBtnsContainer>
              <ProfileBtn>
                edit
                <ProfileBtnImg>
                  <use href={`${svg}#icon-Edit-1`}></use>
                </ProfileBtnImg>
              </ProfileBtn>

              <ProfileBtn>
                delete
                <ProfileBtnImg>
                  <use href={`${svg}#icon-Delete-1`}></use>
                </ProfileBtnImg>
              </ProfileBtn>
            </ProfileBtnsContainer>
          </ProfileCardContainer>
        </li>
        <li>
          <ProfileCardContainer>
            <ProfileCardText>Danylo Bilyi</ProfileCardText>
            <ProfileCardText>male</ProfileCardText>
            <ProfileCardText>25.03.2003</ProfileCardText>
            <ProfileCardText>Kyiv</ProfileCardText>
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
            <ProfileAddBtn>
              <ProfileAddBtnImg>
                <use href={`${svg}#icon-Plus-1`}></use>
              </ProfileAddBtnImg>
            </ProfileAddBtn>
            <CreateProfileText>Create new profile</CreateProfileText>
          </ProfileCardContainer>
        </li>
      </ProfileCardsList>
    </ProfileContainer>
  );
}
