import { changeTheme, userReducer } from 'Redux/user/userSlice';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(
      userReducer(
        { id: '123', name: 'user', admin: true, token: '123123', theme: true },
        { type: changeTheme, payload: false }
      )
    ).toEqual({
      id: '123',
      name: 'user',
      admin: true,
      token: '123123',
      theme: false,
    });
  });
});
