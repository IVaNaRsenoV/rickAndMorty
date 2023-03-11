import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateType } from 'types/Character';
import { getAllCharacters } from 'features/getAllCharacter/getAllCharacters';
import { searchCharacter } from 'features/searchCharacter/searchCharacter';
import { sortArrayHelpers, sortResultHelper } from 'helpers/sortArrayHelper';

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
        state.input = action.payload;
        if (state.search.length !== 0) {
          state.search = state.search.filter(el => el.name.includes(action.payload));
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
