import { FC } from 'react';
import { useGoogleLogin } from '@react-oauth/google';

import { Login } from 'api/login';
import img from 'img/RickAndMorty.png';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import styles from './Login.module.scss';

export const LoginPage: FC = () => {

  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.auth);

  const login = useGoogleLogin({
    onSuccess: async function (tokenResponse) {
            Login(tokenResponse, auth, dispatch);
        },
        onError: (error) => console.log(error),
    });

  return (
    <div className={styles.login}>
        <img src={img} alt='Rick' />
        <span className={styles.click} onClick={() => login()}>Sign in with google</span>
    </div>
  );
};