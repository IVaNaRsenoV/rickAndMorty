import { FC } from 'react';

import { PersonItem } from 'components';
import { ICardType } from 'interfaces/ICardType';
import styles from './PersonInfo.module.scss';

export const PersonInfo: FC<ICardType> = ({ gender, status, species, origin, type }) => {

    return (
        <div className={styles.person__info} data-testid="person info">
            <ul className={styles.info__list}>
                <PersonItem name="Gender" type={gender}/>
                <PersonItem name="Status" type={status}/>
                <PersonItem name="Species" type={species}/>
                <PersonItem name="Origin" type={origin.name}/>
                <PersonItem name="Type" type={type}/>
            </ul>
        </div>
    );
};