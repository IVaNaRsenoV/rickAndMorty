import React, { FC } from 'react';
import { Search } from '../../img/search';
import styles from './Input.module.scss';

export const Input: FC = () => {
  return (
    <div className={styles.input}>
        <button><Search /></button>
        <input
            type="text"
            placeholder="Filter by name..."
        />
    </div>
  )
}

