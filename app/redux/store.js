import { configureStore } from '@reduxjs/toolkit';
import newsListReducer from './slice';

export const store = configureStore({
    reducer: {
        newsList: newsListReducer,
    },
});
