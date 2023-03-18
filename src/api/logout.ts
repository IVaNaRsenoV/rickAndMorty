import { googleLogout } from '@react-oauth/google';
import { setLogin } from 'reducers/auth/index';

export const LogoutHelper = (dispatch: any, auth: boolean) => {
    googleLogout();
    dispatch(setLogin(!auth));
};