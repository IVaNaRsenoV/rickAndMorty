import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthType = {
    auth: boolean;
}

const initialState: AuthType = {
    auth: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<boolean>) => {
            state.auth = action.payload;
        },
    },
});

export default authSlice.reducer;
export const { setLogin } = authSlice.actions;