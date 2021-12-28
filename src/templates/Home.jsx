import React from 'react';
import { useSelector } from 'react-redux';
import { getUserId, getUserName } from '../reducks/users/selectors';

const Home = () => {
  const selector = useSelector(state => state);
  const uid = getUserId(selector);
  const username = getUserName(selector)
  console.log(selector)

  return (
    <div>
      <h2>Home</h2>
      <p>User ID: {uid}</p>
      <p>User Name: {username}</p>
    </div>
  );
};

export default Home;
