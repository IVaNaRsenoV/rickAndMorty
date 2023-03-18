import { FC } from 'react';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import styles from './ArrowButton.module.scss';

export const ArrowButton: FC = () => {
  return (
    <button className={styles.go__back} role="button">
        <ArrowIcon />
        <span>GO BACK</span>
    </button>
  );
};