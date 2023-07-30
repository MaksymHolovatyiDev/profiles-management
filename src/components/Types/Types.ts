export interface IProfileCard {
  name: string;
  gender: string;
  birthDate: string;
  city: string;
  id: string;
}

export interface IUserCard {
  _id: string;
  name: string;
  email: string;
  profiles: number;
}

export interface ISpinerProps {
  height: number;
  width: number;
  containerMargin: boolean;
}

export interface ICurentUser {
  name: string;
  email: string;
  role: string;
  userExist: boolean;
  isPending: boolean;
  logining: boolean;
  scrollPosition: number;
}

export interface IUpdateUser {
  name: string;
  email: string;
  admin: string;
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
