import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStateType } from 'interfaces/ICharacter';
import { getAllCharacters, searchCharacter } from 'features';
import { sortArrayHelpers, sortResultHelper } from 'helpers/sortArrayHelper';

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
      filterCharacters: (state, action: PayloadAction<string>) => {
        state.input = action.payload;
        if (state.search.length !== 0) {
          state.search = state.search.filter((el: any) => el.name.includes(action.payload)).sort((a: any, b: any) => a.name.localeCompare(b.name));
        };
      },
    },
    extraReducers: builder => {

      builder.addCase(getAllCharacters.pending, (state) => {
        state.loading = true;
        state.error = false;
      });

      builder.addCase(getAllCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        sortArrayHelpers(state, action);
      });

      builder.addCase(getAllCharacters.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });

      builder.addCase(searchCharacter.pending, (state) => {
        state.loading = true;
        state.error = false;
      });

      builder.addCase(searchCharacter.fulfilled, (state, action) => {
        state.arr = sortResultHelper(action);
        state.search = sortResultHelper(action);
        state.loading = false;
        state.error = false;
      });

      builder.addCase(searchCharacter.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });

    },
});

export default getAllCharacterSlice.reducer;
export const { filterCharacters } = getAllCharacterSlice.actions;
