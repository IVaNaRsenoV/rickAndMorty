import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { Routes, Route } from 'react-router';
import { Main, Person } from 'pages';
import { getAllCharacters } from 'features/getAllCharacter/getAllCharacters';

const App: FC = () => {

  const dispatch = useAppDispatch();
  const valueInput = useAppSelector(state => state.getAll.input);
  const searchCharacter = useAppSelector(state => state.getAll.search);

  useEffect(() => {
    if (searchCharacter.length === 0) {
      dispatch(getAllCharacters());
    }
  }, [valueInput, dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/character' element={<Person />} />
    </Routes>
  );
};

export default App;