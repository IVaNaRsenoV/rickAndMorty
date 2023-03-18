import { FC} from 'react';

import { RootState } from 'store';
import { Error } from '../Error';
import { Card } from 'components/Card';
import { useAppSelector } from 'hooks/hooks';
import styles from './Group.module.scss';

export const Group: FC = () => {

  const { arr, error } = useAppSelector((state: RootState) => state.getAll);


  if (error) return <Error />;

  return (
    <div className={styles.group}>
      {
        arr && arr.map((el: any) => {
          return (
            <Card 
              key={el.id}
              name={el.name}
              gender={el.gender}
              image={el.image}
              status={el.status}
              species={el.species}
              origin={el.origin}
              type={el.type}
            />
          );
        })
      }
    </div>
  );
};
