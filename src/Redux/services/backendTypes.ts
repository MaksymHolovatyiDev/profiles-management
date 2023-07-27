export interface SignUp {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  remember: boolean;
}

export interface authRes {
  _id: any;
  name: string;
  token: string;
  admin: boolean;
}

export interface profileData {
  _id: any;
  name: string;
  gender: string;
  birthdate: any;
  city: string;
}

export interface profileDataRes {
  profiles: profileData[];
}

export interface createProfile {
  userID: string;
  data: profileData;
}

export interface createProfileRes extends profileData {
  id: string;
}
