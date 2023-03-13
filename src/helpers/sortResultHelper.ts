import { ICharacter } from "interfaces/Character";

export  function sortResultHelper (data: any) {
    if (data !== undefined) {
        return data.sort((prev: ICharacter, next: ICharacter) => prev.name.localeCompare(next.name));
    }
};