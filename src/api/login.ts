import axios from 'axios';
import { setLogin } from 'reducers/authSlice';

export async function Login (tokenResponse: any, auth: boolean, dispatch: any) {
    await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: 'Bearer ' + tokenResponse.access_token },
      })
      .then(() => {
        dispatch(setLogin(!auth));
      })
      .catch((err) => err);      
};