import { FC } from 'react';
import styles from './Avatar.module.scss';

type AvatarType = {
    image: string | undefined;
}

export const Avatar: FC<AvatarType> = ({ image }) => {
  return (
    <div className={styles.avatar}>
      <img role="image" src={image} alt='avatar' />
    </div>
  );
};