import { FC } from 'react';
import styles from './PersonItem.module.scss';

type PersonItemProps = {
    name: string;
    type: string;
}

export const PersonItem: FC<PersonItemProps> = ({ name, type }) => {
    return (
        <li className={styles.person__item} role="list">
            <h3>{name}</h3>
            <span>{type}</span>
        </li>
    );
};