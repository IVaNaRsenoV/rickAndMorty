import { FC } from 'react';
import styles from './Card.module.scss';
import { CardType } from 'types/Card';
import { useAppDispatch } from 'hooks/hooks';
import { setInfoPerson } from 'reducers/getInfoPersonSlice';
import { Link } from 'react-router-dom';

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
    <Link to='/character' className={styles.card} role="article" onClick={setInfo}>
      <img src={image} alt={`${name}`} />
      <h1>{name}</h1>
      <p>{gender}</p>
    </Link>
  );
};
