import { User } from './types';

export const SET_USERS = 'SET_USERS';

export const setUsers = (users: User[]) => ({
  type: SET_USERS,
  payload: users,
});
