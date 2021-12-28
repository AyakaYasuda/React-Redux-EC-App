import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { signInAction } from '../reducks/users/actions';

const Login = () => {
  const dispatch = useDispatch();
  
  return (
    <div>
      <h2>Log in</h2>
      <button
        onClick={() => {
          dispatch(signInAction({ uid: '0001', username: 'tarahack' }));
          // render is not working : NEED TO FIX
          dispatch(push('/'));
        }}
      >
        Log in
      </button>
    </div>
  );
};

export default Login;
