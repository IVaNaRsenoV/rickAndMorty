import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router';

import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { getAllCharacters } from 'features/getAllCharacter/getAllCharacters';
import { Main, Person } from 'pages';
import { LoginPage } from 'components';

const App: FC = () => {

  const dispatch = useAppDispatch();
  
  const auth = useAppSelector(state => state.auth.auth);
  const valueInput = useAppSelector(state => state.getAll.input);
  const searchCharacter = useAppSelector(state => state.getAll.search);

  useEffect(() => {
    if (searchCharacter.length === 0) {
      dispatch(getAllCharacters());
    }
  },[valueInput, dispatch]);

  return (
    <>
      {
        auth ? 
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/character' element={<Person />} />
        </Routes> : <LoginPage />
      }
    </>
  );
};

export default App;

