import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { LogoutElement } from 'img/logout';
import { LogoutHelper } from 'api/logout';
import styles from './Logout.module.scss';

export const Logout: FC = () => {

  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.auth);

  return (
    <div className={styles.logout} onClick= {() => LogoutHelper(dispatch, auth)}>
        <LogoutElement />
    </div>
  );
};
