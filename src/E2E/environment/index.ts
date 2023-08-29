export const baseUrl = 'http://localhost:3000';
export const backendUrl =
  'https://profiles-management-backend-11fa8f64c6a0.herokuapp.com/api/';
export enum Routes {
  SignIn = '/SignIn',
  SignUp = '/SignUp',
}
export const SignInAdmin = {
  login: 'Max@admin',
  password: 'qweqwe',
};

export const SignInUser = {
  login: 'Max@user',
  password: 'qweqwe',
};

export const SignUpUser = {
  login: 'NewUser1@gmail',
  password: 'qweqwe',
};

export const profile = {
  name: 'qwe',
  gender: 'female',
  city: 'qwer',
  birthdate: '10.8.2023',
};
