import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

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

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BACKEND_URL,
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
  tagTypes: ['Dashboard', 'Users'],
  endpoints: builder => ({
    Authorization: builder.mutation<AuthRes, AuthReq>({
      query: data => ({
        url: `auth/${data.route}`,
        method: 'POST',
        body: data.body,
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
      invalidatesTags: ['Dashboard', 'Users'],
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
      invalidatesTags: ['Dashboard', 'Users'],
    }),

    GetDashboardInfo: builder.query<DashboardRes, void>({
      query: () => ({
        url: 'dashboard',
      }),
      providesTags: ['Dashboard'],
    }),

    GetAllUsers: builder.query<GetUsersRes[], void>({
      query: () => ({
        url: 'users',
      }),
      providesTags: ['Users'],
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
      invalidatesTags: ['Dashboard', 'Users'],
    }),
  }),
});

export const {
  useGetDashboardInfoQuery,
  useGetAllUsersQuery,
  useAuthorizationMutation,
  useCreateProfilesMutation,
  useUpdateProfileMutation,
  useDeleteProfileMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = backendAPI;
