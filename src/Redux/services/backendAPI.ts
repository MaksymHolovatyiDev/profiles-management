import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  SignUp,
  authRes,
  createProfile,
  createProfileRes,
  profileDataRes,
  profileData,
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
    SignUp: builder.query<authRes, SignUp>({
      query: body => ({
        url: 'auth/signup',
        method: 'post',
        body,
      }),
    }),

    SignIn: builder.query<
      authRes,
      Pick<SignUp, 'email' | 'password' | 'remember'>
    >({
      query: body => ({
        url: 'auth/signin',
        method: 'post',
        body,
      }),
    }),

    GetProfiles: builder.query<profileDataRes, string>({
      query: id => ({
        url: `profiles/${id}`,
      }),
    }),
    CreateProfiles: builder.query<createProfileRes, createProfile>({
      query: body => ({
        url: 'profiles',
        method: 'post',
        body,
      }),
    }),

    // UpdateProfile: builder.query<string, string>({
    //   query: data => ({
    //     url: `profiles/${data.id}`,
    //     method: 'post',
    //     body: data.body,
    //   }),
    // }),

    DeleteProfile: builder.query<profileData, string>({
      query: id => ({
        url: `profiles/${id}`,
        method: 'delete',
      }),
    }),
  }),
});

export const { useGetProfilesQuery } = backendAPI;
