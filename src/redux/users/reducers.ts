import { SET_USERS } from './actions';
import { UsersState } from './types';

const initialState: UsersState = {
  list: [],
};

const usersReducer = (state = initialState, action: any): UsersState => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
