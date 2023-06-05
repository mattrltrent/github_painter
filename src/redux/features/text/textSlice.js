// textSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  textFieldValue: '', // initial value for the text field
};

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setTextFieldValue: (state, action) => {
      state.textFieldValue = action.payload;
    },
    clearTextFieldValue: (state) => {
      state.textFieldValue = '';
    },
  },
});

export const { setTextFieldValue, clearTextFieldValue } = textSlice.actions;

export const selectTextFieldValue = (state) => state.text.textFieldValue;
export const textReducer = textSlice.reducer;
export const selectedText = (state) => state.text;

export default textSlice.reducer;
