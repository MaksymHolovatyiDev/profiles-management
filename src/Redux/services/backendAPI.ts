import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  IAuthRes,
  ISignUp,
  IProfileDataRes,
  ICreateProfileRes,
  IProfileData,
  ICreateProfile,
  IUpdateProfile,
  IDashboard,
  IUser,
  IUserUpdate,
  IUserUpdateRes,
} from './backendTypes';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api/',
  prepareHeaders: headers => {
    if (!headers.get('Authorization')) {
      const userData = localStorage.getItem('user');
      if (userData) {
        const parsedUser = JSON.parse(userData);

        if (parsedUser?.token)
          headers.set('Authorization', `Bearer ${parsedUser?.token}`);
      }
    }

    return headers;
  },
});

export const backendAPI = createApi({
  reducerPath: 'backendAPI',
  baseQuery: baseQuery,
  endpoints: builder => ({
    SignUp: builder.query<IAuthRes, ISignUp>({
      query: body => ({
        url: 'auth/signup',
        method: 'post',
        body,
      }),
    }),

    SignIn: builder.query<
      IAuthRes,
      Pick<ISignUp, 'email' | 'password' | 'remember'>
    >({
      query: body => ({
        url: 'auth/signin',
        method: 'post',
        body,
      }),
    }),

    GetProfiles: builder.query<IProfileDataRes, string>({
      query: id => ({
        url: `profiles/${id}`,
      }),
    }),
    CreateProfiles: builder.query<ICreateProfileRes, ICreateProfile>({
      query: body => ({
        url: 'profiles',
        method: 'post',
        body,
      }),
    }),

    UpdateProfile: builder.query<IProfileData, IUpdateProfile>({
      query: body => ({
        url: 'profiles',
        method: 'put',
        body,
      }),
    }),

    DeleteProfile: builder.query<IProfileData, string>({
      query: id => ({
        url: `profiles/${id}`,
        method: 'delete',
      }),
    }),

    GetDashboardInfo: builder.query<IDashboard, void>({
      query: () => ({
        url: 'dashboard',
      }),
    }),

    GetAllUsers: builder.query<IUser[], void>({
      query: () => ({
        url: 'users',
      }),
    }),

    UpdateUser: builder.query<IUserUpdateRes, IUserUpdate>({
      query: body => ({
        url: 'users',
        method: 'put',
        body,
      }),
    }),

    DeleteUser: builder.query<IProfileData, string>({
      query: id => ({
        url: `users/${id}`,
        method: 'delete',
      }),
    }),
  }),
});

export const { useGetProfilesQuery } = backendAPI;
