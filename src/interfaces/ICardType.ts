export interface ICardType {
    name?: string;
    gender: string;
    image?: string;
    status: string;
    species: string;
    origin: {
        name: string;
    };
    type: string;
};