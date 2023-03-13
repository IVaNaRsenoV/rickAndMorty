// import { PayloadAction } from "@reduxjs/toolkit";

// import { CharacterList } from 'types/Character';
import { StateType } from "types/Character";

// interface ISortByInput {
//     results: CharacterList
// }

export function sortByInputHelper (state: StateType, action:any) {
    return action.payload.results.filter((el: any) => 
        el.name.includes(state.input))
                .sort((a: any, b: any) => a.name.localeCompare(b.name));
}