import React, { FC, useState, useEffect } from 'react';

import { Search } from 'img/search';
import { useAppDispatch } from 'hooks/hooks';
import { searchCharacter } from 'features/index';
import { filterCharacters } from 'reducers/getAllCharacterSlice';
import styles from './Input.module.scss';

export const Input: FC = () => {

  const dispatch = useAppDispatch();
  const [ value, setValue ] = useState<string>('');

  useEffect(() => {
    dispatch(filterCharacters(value));
  }, [value, dispatch]);

  return (
    <div className={styles.input}>
      <button onClick={() => dispatch(searchCharacter(value))}><Search /></button>
      <input
        type="text"
        placeholder="Filter by name..."
        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

