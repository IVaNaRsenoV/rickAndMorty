import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from 'hooks/hooks';
import { Arrow } from 'img/arrow';
import styles from './Person.module.scss';

export const Person: FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    gender, image, name,
    origin, species, status,
    type,
  } = useAppSelector(state => state.setInfoPerson);

  return (
    <div className={styles.person}>

        <Link to = '/'>
            <button className={styles.go__back}><Arrow /><span>GO BACK</span></button>
        </Link>

        <div className={styles.avatar}>
            <img src={image} alt='avatar' />
        </div>


        <h3 className={styles.person__name}>{name}</h3>
        <h5 className={styles.person__information}>Informations</h5>

        <div className={styles.person__info}>
            <ul className={styles.info__list}>
                <li>
                    <h3>Gender</h3>
                    <span>{gender}</span>
                </li>
                <li>
                    <h3>Status</h3>
                    <span>{status}</span>
                </li>
                <li>
                    <h3>Species</h3>
                    <span>{species}</span>
                </li>
                <li>
                    <h3>Origin</h3>
                    <span>{origin.name}</span>
                </li>
                <li>
                    <h3>Type</h3>
                    <span>{type}</span>
                </li>
            </ul>
        </div>
    </div>
  );
};
