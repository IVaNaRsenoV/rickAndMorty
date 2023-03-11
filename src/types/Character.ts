type Character = {
    id: string;
    name: string;
    gender: string;
    image: string;
};

type CharacterList = Character[] | undefined;

export type StateType = {
    arr: CharacterList[];
    search: Character[];
    input: string;
    loading: boolean;
    error: boolean;
}