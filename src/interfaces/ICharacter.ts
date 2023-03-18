export interface ICharacter {
    id: string | number;
    name: string;
    gender: string;
    image: string;
};

export type CharacterList = ICharacter[] | undefined;

export type IStateType = {
    arr: CharacterList[];
    search: ICharacter[];
    input: string;
    loading: boolean;
    error: boolean;
}