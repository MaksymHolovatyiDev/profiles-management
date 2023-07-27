export interface IProfileCard {
  name: string;
  gender: string;
  birthDate: string;
  city: string;
  id: any;
}

export interface IUserCard {
  name: string;
  email: string;
  profiles: number;
}

export interface ISpinerProps {
  height: number;
  width: number;
  containerMargin: boolean;
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
