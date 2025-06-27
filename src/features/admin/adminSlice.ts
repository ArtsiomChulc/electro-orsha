import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
    isAdmin: boolean;
    email: string | null;
    isLoading: boolean;
};

const initialState: UserState = {
    isAdmin: false,
    email: null,
    isLoading: false,
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setUser(
            state,
            action: PayloadAction<{ email: string; isAdmin: boolean }>
        ) {
            state.isAdmin = action.payload.isAdmin;
            state.email = action.payload.email;
            state.isLoading = false;
        },
        logout(state) {
            state.isAdmin = false;
            state.email = null;
            state.isLoading = false;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
    },
});

export const { setUser, logout, setLoading } = adminSlice.actions;
