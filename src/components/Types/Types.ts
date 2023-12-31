export interface ProfileCard {
  name: string;
  gender: string;
  birthDate: string;
  city: string;
  id: string;
}

export interface UserCard {
  _id: string;
  name: string;
  email: string;
  profiles: number;
}

export interface SpinnerProps {
  height: number;
  width: number;
  containerMargin: boolean;
}

export interface CurrentUser {
  name: string;
  email: string;
  role: string;
  scrollPosition: number;
}

export interface UpdateUser {
  name: string;
  email: string;
  admin: string;
}

export interface AuthorizationComponents {
  emailError: boolean;
  passwordError: boolean;
  onFormSubmit: any;
  onButtonClick: any;
  isFetching: boolean;
}

export interface ProfilesBtnsCardProps {
  setShowModal: any;
  id: string;
}

/////////////////////////////////      Types    ////////////////////////////////

export type UserSignUpData = {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  remember: boolean;
};

export type UserSignInData = {
  email: string;
  password: string;
};

export type ProfileDataValue = {
  name: string;
  gender: string;
  city: string;
};

export type SvgImgType = {
  imageName: string;
};

export type DashboardCardType = {
  DashboardCardData: {
    name: string;
    value: number | string;
  };
};

export type HeaderNavigationLinkItemTypes = {
  linkData: {
    route: string;
    click: any;
    text: string;
    image: string;
  };
};
