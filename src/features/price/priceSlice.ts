import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PriceType = {
    pointPrice: number;
    meterPrice: number;
};

type contentState = {
    priceInfo: PriceType;
    isLoadingContent: boolean;
};

const initialState: contentState = {
    priceInfo: {
        pointPrice: 0,
        meterPrice: 0,
    },
    isLoadingContent: false,
};

export const priceSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setPriceInfo(state, action: PayloadAction<PriceType>) {
            state.priceInfo = action.payload;
            state.isLoadingContent = false;
        },
        setLoadingContent(state, action: PayloadAction<boolean>) {
            state.isLoadingContent = action.payload;
        },
    },
});

export const { setPriceInfo, setLoadingContent } = priceSlice.actions;
