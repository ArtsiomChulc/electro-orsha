import { adminSlice } from '@/features/admin/adminSlice';
import { contentSlice } from '@/features/content/contentSlice';
import { priceSlice } from '@/features/price/priceSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        admin: adminSlice.reducer,
        content: contentSlice.reducer,
        price: priceSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
