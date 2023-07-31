interface SignInBody {
  email: string;
  password: string;
  remember: boolean;
}

interface SignUpBody extends SignInBody {
  name: string;
  admin: boolean;
}

export interface AuthReq {
  route: string;
  body: SignInBody | SignUpBody;
}

export interface AuthRes {
  _id: any;
  name: string;
  token: string;
  admin: boolean;
}

export interface ProfileDataRes {
  _id: any;
  name: string;
  gender: string;
  birthdate: any;
  city: string;
}

export interface CreateProfile {
  userID: string;
  data: ProfileDataRes;
}

export interface UpdateProfileReq extends CreateProfile {
  id: string;
  body: CreateProfile;
}

export interface CreateProfileRes extends ProfileDataRes {
  id: string;
}

export interface DashboardRes {
  users: number;
  profiles: number;
  adult: number;
}

export interface GetUsersRes {
  _id: string;
  name: string;
  email: string;
  profiles: number;
}

export interface UserUpdateReq {
  _id: string;
  body: {
    name: string;
    email: string;
    admin: boolean;
  };
}

export interface UserUpdateRes {
  _id: string;
  name: string;
  email: string;
  admin: boolean;
}
