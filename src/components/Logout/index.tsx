import { FC, useState } from 'react';

import { LogoutHelper } from 'api/logout';
import { LogoutElement } from 'img/logout';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import styles from './Logout.module.scss';

export const Logout: FC = () => {

  const [toggle, setToggle] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth.auth);

  return (
    <div className={styles.logout} onClick={() => {
      if(toggle === false) setToggle(!toggle);
    }}>
        <LogoutElement />
        {
          toggle ?
            <div className={styles.popup}>
              <span>Do you really want to exit!</span>
              <button className={styles.logout__btn} onClick= {() => LogoutHelper(dispatch, auth)}>OK</button>
              <button className={styles.logout__btn} onClick={() => setToggle(false)}>NOT</button>
            </div> : null
        }
    </div>
  );
};
