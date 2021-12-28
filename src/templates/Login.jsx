import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../reducks/users/operations';

const Login = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state);
  console.log(selector);

  return (
    <div>
      <h2>Log in</h2>
      <button
        onClick={() => {
          dispatch(signIn);
          console.log(selector);
        }}
      >
        Log in
      </button>
    </div>
  );
};

export default Login;
