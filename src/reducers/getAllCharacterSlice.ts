import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStateType, CharacterList } from 'interfaces/Character';
import { getAllCharacters } from 'features/getAllCharacter/getAllCharacters';
import { searchCharacter } from 'features/searchCharacter/searchCharacter';
import { sortArrayHelpers } from 'helpers/sortArrayHelper';
import { sortResultHelper } from 'helpers/sortResultHelper';
import { filterCharactersHelper } from 'helpers/filterCharacterHelper';

interface IActionType {
  payload: {
    results: CharacterList;
  }
}

const initialState: IStateType  = {
  arr: [],
  search: [],
  input: '',
  loading: false,
  error: false,
};

const getAllCharacterSlice = createSlice({
    name: 'getAllCharacters',
    initialState,
    reducers: {
      filterCharacters: (state: IStateType, action: PayloadAction<string>) => {
        state.input = action.payload;
        filterCharactersHelper(state, action);
      },
    },
    extraReducers: builder => {

      builder.addCase(getAllCharacters.pending, (state: IStateType) => {
        state.loading = true;
        state.error = false;
      });

      builder.addCase(getAllCharacters.fulfilled, (state, action: IActionType) => {
        state.loading = false;
        state.error = false;
        sortArrayHelpers(state, action.payload.results);
      });

      builder.addCase(getAllCharacters.rejected, (state: IStateType) => {
        state.loading = false;
        state.error = true;
      });

      builder.addCase(searchCharacter.pending, (state: IStateType) => {
        state.loading = true;
        state.error = false;
      });

      builder.addCase(searchCharacter.fulfilled, (state, action: IActionType) => {
        state.arr = sortResultHelper(action.payload.results);
        state.search = sortResultHelper(action.payload.results);
        state.loading = false;
        state.error = false;
      });

      builder.addCase(searchCharacter.rejected, (state: IStateType) => {
        state.loading = false;
        state.error = true;
      });

    },
});

export default getAllCharacterSlice.reducer;
export const { filterCharacters } = getAllCharacterSlice.actions;
