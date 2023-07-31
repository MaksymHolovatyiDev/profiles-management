import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  AuthRes,
  AuthReq,
  CreateProfileRes,
  ProfileDataRes,
  CreateProfile,
  UpdateProfileReq,
  DashboardRes,
  GetUsersRes,
  UserUpdateReq,
  UserUpdateRes,
} from './backendTypes';
import { baseUrl } from 'environment/variables';

const baseQuery = fetchBaseQuery({
  baseUrl,
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
    SignUp: builder.mutation<AuthRes, AuthReq>({
      query: body => ({
        url: 'auth/signup',
        method: 'POST',
        body,
      }),
    }),

    SignIn: builder.mutation<
      AuthRes,
      Pick<AuthReq, 'email' | 'password' | 'remember'>
    >({
      query: body => ({
        url: 'auth/signin',
        method: 'POST',
        body,
      }),
    }),

    GetProfiles: builder.query<ProfileDataRes[], string>({
      query: id => ({
        url: `profiles/${id}`,
      }),
    }),

    CreateProfiles: builder.mutation<CreateProfileRes, CreateProfile>({
      query: body => ({
        url: 'profiles',
        method: 'POST',
        body,
      }),
    }),

    UpdateProfile: builder.mutation<ProfileDataRes, UpdateProfileReq>({
      query: data => ({
        url: `profiles/${data.id}`,
        method: 'PATCH',
        body: data.body,
      }),
    }),

    DeleteProfile: builder.mutation<ProfileDataRes, string>({
      query: id => ({
        url: `profiles/${id}`,
        method: 'DELETE',
      }),
    }),

    GetDashboardInfo: builder.query<DashboardRes, void>({
      query: () => ({
        url: 'dashboard',
      }),
    }),

    GetAllUsers: builder.query<GetUsersRes[], void>({
      query: () => ({
        url: 'users',
      }),
    }),

    GetCurrentUser: builder.query<UserUpdateRes, string>({
      query: id => ({
        url: `users/${id}`,
      }),
    }),

    UpdateUser: builder.mutation<UserUpdateRes, UserUpdateReq>({
      query: data => ({
        url: `users/${data._id}`,
        method: 'PATCH',
        body: data.body,
      }),
    }),

    DeleteUser: builder.mutation<ProfileDataRes, string>({
      query: id => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetDashboardInfoQuery,
  useGetAllUsersQuery,
  useSignInMutation,
  useSignUpMutation,
  useCreateProfilesMutation,
  useUpdateProfileMutation,
  useDeleteProfileMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = backendAPI;
