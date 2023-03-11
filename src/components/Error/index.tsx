import { FC } from 'react';
import styles from './Error.module.scss';

export const Error: FC = () => {
  return (
    <div className={styles.error}>
        <h1>
        💥💥💥  Loading error, probably wrong url  💥💥💥
        </h1>
    </div>
  );
};
