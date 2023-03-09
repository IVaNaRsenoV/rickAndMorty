import { FC } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Card } from '../Card';
import styles from './Group.module.scss';

const GET_CHARACTERS = gql(`
  query GetCharacters {
    characters {
      results {
        id,
        name,
        gender,
        image
      }
    }
  }
`);

type Character = {
  id: string;
  name: string;
  gender: string;
  image: string
}

type CharacterQueryResult = {
  characters: {
    results: Character[];
  }
};

export const Group: FC = () => {

    const { 
            loading,
            error,
            data
        } = useQuery<CharacterQueryResult>(GET_CHARACTERS);

      console.log(data);

    return (
        <div className={styles.group}>
            {
                loading && <h1>Loading ...</h1>
            }
            {
            data?.characters.results.map(({ id, name, gender, image}) => {
                return (
                <Card 
                    key={id}
                    name={name}
                    gender={gender}
                    image={image}
                />
                )
            })
            }
        </div>
    )
}
