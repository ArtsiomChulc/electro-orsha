import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
    isAdmin: boolean;
    email: string | null;
};

const initialState: UserState = {
    isAdmin: false,
    email: null,
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.isAdmin = action.payload.isAdmin;
            state.email = action.payload.email;
        },
        logout(state) {
            state.isAdmin = false;
            state.email = null;
        },
    },
});

export const { setUser, logout } = adminSlice.actions;
