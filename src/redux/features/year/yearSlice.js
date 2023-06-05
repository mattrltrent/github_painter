import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedYear: 2019,
};

export const yearSlice = createSlice({
  name: 'year',
  initialState,
  reducers: {
    selectYear: (state, action) => {
      state.selectedYear = action.payload;
    },
  },
});

export const { selectYear } = yearSlice.actions;
export const yearReducer = yearSlice.reducer;

