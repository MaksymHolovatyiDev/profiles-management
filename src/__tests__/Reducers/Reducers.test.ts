import {
  changeMainUserData,
  changeTheme,
  logOut,
  setUser,
  userReducer,
} from 'Redux/user/userSlice';

import { profilesReducer, profilesReset } from 'Redux/profiles/profilesSlice';
import {
  currentUserReducer,
  resetUser,
  setScrollPosition,
} from 'Redux/currentUser/currentUserSlice';

const currentUserState = {
  id: '123',
  name: 'user',
  admin: true,
  token: '123123',
  theme: true,
};

const currentProfilesState = {
  _id: 'adsf',
  name: 'name',
  gender: 'male',
  birthdate: 'data',
  city: 'Lviv',
};

describe('user reducers', () => {
  it('setUser reducer', () => {
    expect(
      userReducer(
        {
          id: '',
          name: '',
          admin: false,
          token: '',
          theme: true,
        },
        {
          type: setUser,
          payload: { _id: '123', name: 'user', admin: true, token: '123123' },
        }
      )
    ).toEqual(currentUserState);
  });

  it('changeMain reducer', () => {
    expect(
      userReducer(currentUserState, {
        type: changeMainUserData,
        payload: { name: 'new user', admin: false },
      })
    ).toEqual({
      ...currentUserState,
      name: 'new user',
      admin: false,
    });
  });

  it('changeTheme reducer', () => {
    expect(
      userReducer(currentUserState, { type: changeTheme, payload: false })
    ).toEqual({
      ...currentUserState,
      theme: false,
    });
  });

  it('logOut reducer', () => {
    expect(userReducer(currentUserState, { type: logOut })).toEqual({
      id: '',
      name: '',
      admin: false,
      token: '',
      theme: true,
    });
  });
});

describe('profiles reducers', () => {
  it('profilesReset reducer', () => {
    expect(
      profilesReducer(
        {
          profiles: [currentProfilesState],
        },
        { type: profilesReset }
      )
    ).toEqual({ profiles: [] });
  });
});

describe('currentUser reducers', () => {
  it('setScrollPosition reducer', () => {
    expect(
      currentUserReducer(
        {
          name: 'a',
          email: 'c',
          role: 'q',
          scrollPosition: 10,
        },
        { type: setScrollPosition, payload: 0 }
      )
    ).toEqual({
      name: 'a',
      email: 'c',
      role: 'q',
      scrollPosition: 0,
    });
  });
  it('resetUser reducer', () => {
    expect(
      currentUserReducer(
        {
          name: 'a',
          email: 'c',
          role: 'q',
          scrollPosition: 10,
        },
        { type: resetUser, payload: 0 }
      )
    ).toEqual({
      name: '',
      email: '',
      role: '',
      scrollPosition: 0,
    });
  });
});
