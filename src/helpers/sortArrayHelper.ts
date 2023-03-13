import { sortResultHelper } from "./sortResultHelper";
import { sortByInputHelper } from "./sortByInputHelper";
import { IStateType } from 'interfaces/Character';
  
export function sortArrayHelpers (state: IStateType, data: any) {
    if (state.input === '') {
        state.arr = sortResultHelper(data);
    } else {
        state.arr = sortByInputHelper(state, data);
    }
}