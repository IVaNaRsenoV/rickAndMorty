import { FC } from 'react';
import styles from './Card.module.scss';

interface CardType {
    name: string;
    gender: string;
    image: string;
}

export const Card: FC<CardType> = ({ name, image, gender }) => {
  return (
    <div className={styles.card}>
        <img src={image} alt={`${name}`} />
        <h1>{name}</h1>
        <p>{gender}</p>
    </div>
  )
}
