import img from 'img/logo.png';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.logo}>
      <img src={img} alt="logo" />
    </div>
  );
};
