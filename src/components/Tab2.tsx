import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersThunk } from '../redux/users/thunks';
import { RootState } from '../redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface Props {
  onNavigate: () => void;
}

const Tab2 = ({ onNavigate }: Props) => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const users = useSelector((state: RootState) => state.users.list);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsersThunk());
    }
  }, [dispatch, users.length]);

  const handleClick = () => {
    dispatch(fetchUsersThunk());
    onNavigate();
  };

  return (
    <div className='rounded-lg p-4 flex flex-col items-center text-center'>
      <button className="btn btn-primary " onClick={handleClick}>
        Go to Tab 3
      </button>
      
      <div className="pt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        {users.map((user) => (
          <div
          key={user.id}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105"
          style={{ maxWidth: "500px", margin: "0 auto" }} 
        >
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="w-16 h-16  rounded-full mb-2"
          />
          <div>
            <h3 className="font-medium text-lg">{user.first_name} {user.last_name}</h3>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <hr className="my-2" />
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Tab2;
