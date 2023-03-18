import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from 'hooks/hooks';
import { PersonInfo, Avatar, ArrowButton, PersonName } from 'components';
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
            <ArrowButton />
        </Link>

        <Avatar image={image}/>
        <PersonName name={name}/>

        <PersonInfo
            type = {type}
            status={status}
            origin = {origin}
            gender = {gender}
            species = {species}
        />
    </div>
  );
};