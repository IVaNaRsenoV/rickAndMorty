import { FC } from 'react';

import { ICardType } from 'interfaces/ICardType';
import { useAppDispatch } from 'hooks/hooks';
import { setInfoPerson } from 'reducers/getInfoPerson';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

export const Card: FC<ICardType> = ({ name, image, gender, status, species, origin, type }) => {
  
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
