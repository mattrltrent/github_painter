import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPalette: 'green1',
};

export const paletteSlice = createSlice({
  name: 'palette',
  initialState,
  reducers: {
    selectPalette: (state, action) => {
      state.selectedPalette = action.payload;
      },
  },
});

export const { selectPalette } = paletteSlice.actions;
export const paletteReducer = paletteSlice.reducer;
