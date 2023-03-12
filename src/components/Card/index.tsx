import { FC } from 'react';

import { CardType } from 'types/Card';
import { useAppDispatch } from 'hooks/hooks';
import { setInfoPerson } from 'reducers/getInfoPersonSlice';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

export const Card: FC<CardType> = ({ name, image, gender, status, species, origin, type }) => {
  
  const dispatch = useAppDispatch();

  function setInfo () {
    dispatch(setInfoPerson({name,
                            image,
                            gender,
                            status,
                            species,
                            origin,
                            type,
                        }));
  };
  
  return (
    <div className={styles.card} role="article">
      <Link to='/character'  onClick={setInfo}>
        <img src={image} alt={`${name}`} />
        <h1>{name}</h1>
        <p>{gender}</p>
    </Link>
    </div>
  );
};
