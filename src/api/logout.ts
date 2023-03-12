import { googleLogout } from '@react-oauth/google';
import { setLogin } from 'reducers/authSlice';

export const LogoutHelper = (dispatch: any, auth: any) => {
    googleLogout();
    dispatch(setLogin(!auth));
    console.log('logout');
};