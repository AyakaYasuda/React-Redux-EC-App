import { signInAction } from './actions';
import { push } from 'connected-react-router';

export const signIn = () => {
  return async (dispatch, getState) => {
    console.log("dispatch", dispatch);
    console.log("getstate", getState);

    const state = getState();

    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/kojiokajima';
      console.log(url);
      
      const response = await fetch(url)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .catch(() => null);
      // console.log(response);

      const username = response.login;

      dispatch(
        signInAction({
          isSignedIn: 'true',
          uid: '0001',
          username: username,
        })
      );
      dispatch(push('/'));
    }
  };
};
