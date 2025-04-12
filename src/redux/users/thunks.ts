import { Dispatch } from 'redux';
import { setUsers } from './actions';

export const fetchUsersThunk = () => async (dispatch: Dispatch) => {
  const res = await fetch('https://reqres.in/api/users?page=1');
  const data = await res.json();
  dispatch(setUsers(data.data));
};
