import { IStateType, ICharacter } from "interfaces/Character";

export function sortByInputHelper (state: IStateType, data: any) {    
    if (data !== undefined) {
        return data.filter((el: ICharacter) =>
        el.name.includes(state.input))
                .sort((prev: ICharacter, next: ICharacter) => prev.name.localeCompare(next.name));
    }
}