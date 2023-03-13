import { PayloadAction } from '@reduxjs/toolkit';
import { IStateType, ICharacter } from "interfaces/Character";

export const filterCharactersHelper = (state: IStateType, action: PayloadAction<string>) => {
    if (state.search.length !== 0) {
        state.search = state.search.filter((el: ICharacter) => el.name.includes(action.payload)).sort((a: any, b: any) => a.name.localeCompare(b.name));
      };
};