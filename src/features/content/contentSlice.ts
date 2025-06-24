import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HeaderInfoType = {
    phone: number;
    address_city: string;
    address_country: string;
};

type contentState = {
    headerInfo: HeaderInfoType;
    isLoadingContent: boolean;
};

const initialState: contentState = {
    headerInfo: {
        phone: 0,
        address_city: '',
        address_country: '',
    },
    isLoadingContent: false,
};

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setHeaderInfo(state, action: PayloadAction<HeaderInfoType>) {
            state.headerInfo = action.payload;
            state.isLoadingContent = false;
        },
        setLoadingContent(state, action: PayloadAction<boolean>) {
            state.isLoadingContent = action.payload;
        },
    },
});

export const { setHeaderInfo, setLoadingContent } = contentSlice.actions;
