import { FC } from 'react';
import styles from './Loading.module.scss';

export const Loading: FC = () => {
  return (
    <div className={styles.spinner__container} >
      <div className={styles.spinner}></div>
    </div>
  );
};
