export const baseUrl = 'http://localhost:3000';

export enum Routes {
  SignIn = '/SignIn',
  SignUp = '/SignUp',
  Dashboard = '/Dashboard',
  Users = '/Users',
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
  name: 'user',
};

export const profile = {
  name: 'qwe',
  gender: 'female',
  city: 'qwer',
  birthdate: '10.8.2023',
};
