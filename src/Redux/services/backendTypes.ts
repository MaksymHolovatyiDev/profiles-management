export interface ISignUp {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  remember: boolean;
}

export interface IAuthRes {
  _id: any;
  name: string;
  token: string;
  admin: boolean;
}

export interface IProfileData {
  _id: any;
  name: string;
  gender: string;
  birthdate: any;
  city: string;
}

export interface IProfileDataRes {
  profiles: IProfileData[];
}

export interface ICreateProfile {
  userID: string;
  data: IProfileData;
}

export interface IUpdateProfile extends ICreateProfile {
  id: string;
  body: ICreateProfile;
}

export interface ICreateProfileRes extends IProfileData {
  id: string;
}

export interface IDashboard {
  users: number;
  profiles: number;
  adult: number;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  admin: boolean;
  profiles: number;
}

export interface IUserUpdate {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface IUserUpdateRes {
  _id: string;
  name: string;
  email: string;
  admin: boolean;
}