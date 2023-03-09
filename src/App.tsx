import { FC } from 'react';
import { Main } from './pages';
import styles from './App.module.scss';


const App: FC = () => {
  
  return (
    <div className={styles.container}>
      <Main />
    </div>
  )
}

export default App;