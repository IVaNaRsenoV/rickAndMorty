import { FC } from 'react';
import styles from './PersonName.module.scss';

type PersonNameType = {
    name?: string;
}

export const PersonName: FC<PersonNameType> = ({ name }) => {
  return (
    <div data-testid="person name">
        <h3 className={styles.person__name}>{name}</h3>
        <h5 className={styles.person__information}>Informations</h5>
    </div>
  );
};
