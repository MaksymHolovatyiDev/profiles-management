export interface IProfileCard {
  name: string;
  gender: string;
  birthDate: string;
  city: string;
}

export interface IUserCard {
  name: string;
  email: string;
  profiles: number;
}

export type UserSignUpData = {
  name: string;
  email: string;
  password: string;
  admin: boolean;
};

export type UserSignInData = {
  email: string;
  password: string;
};
