import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'newsList',
  initialState: {
    listofNews: [],
  },
  reducers: {
    addItems: (state, action) => {
        state.listofNews = [...action.payload];
    },
  },
});

export const { addItems } = newsSlice.actions;

export default newsSlice.reducer;
