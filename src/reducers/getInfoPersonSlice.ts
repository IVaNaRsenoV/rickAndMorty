import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InfoType = {
    name: string;
    image: string;
    gender: string;
    status: string;
    species: string;
    origin: {
        name: string;
    };
    type: string;
}

const initialState: InfoType = {
    name: 'name',
    image: 'image',
    gender: 'gender',
    status: 'status',
    species: 'species',
    origin: {
        name: 'origin',
    },
    type: 'type',
};

const getInfoPersonSlice = createSlice({
    name: 'get info',
    initialState,
    reducers: {
        setInfoPerson: (state, action: PayloadAction<InfoType>) => {
            state.name = action.payload.name;
            state.image = action.payload.image;
            state.gender = action.payload.gender;
            state.status = action.payload.status;
            state.species = action.payload.species;
            state.origin = action.payload.origin;
            state.type = action.payload.type;
        },
    },
});

export const { setInfoPerson } = getInfoPersonSlice.actions;
export default getInfoPersonSlice.reducer;