import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateType } from 'types/Character';
import { getAllCharacters } from 'features/getAllCharacter/getAllCharacters';
import { searchCharacter } from 'features/searchCharacter/searchCharacter';
import { sortArrayHelpers, sortResultHelper } from 'helpers/sortArrayHelper';
import { filterCharactersHelper } from 'helpers/filterCharactersHelper';

const initialState: StateType  = {
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
      filterCharacters: (state, action: PayloadAction<string>) => {
        filterCharactersHelper(state, action);
      },
    },
    extraReducers: builder => {

      builder.addCase(getAllCharacters.pending, (state: StateType) => {
        state.loading = true;
        state.error = false;
      });

      builder.addCase(getAllCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        sortArrayHelpers(state, action);
      });

      builder.addCase(getAllCharacters.rejected, (state: StateType) => {
        state.loading = false;
        state.error = true;
      });

      builder.addCase(searchCharacter.pending, (state: StateType) => {
        state.loading = true;
        state.error = false;
      });

      builder.addCase(searchCharacter.fulfilled, (state, action) => {
        state.arr = sortResultHelper(action);
        state.search = sortResultHelper(action);
        state.loading = false;
        state.error = false;
      });

      builder.addCase(searchCharacter.rejected, (state: StateType) => {
        state.loading = false;
        state.error = true;
      });

    },
});

export default getAllCharacterSlice.reducer;
export const { filterCharacters } = getAllCharacterSlice.actions;
