"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = Array.from({ length: 365 }, () => 0); // initial commit count for each block

export const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    updateBlockCommits: (state, action) => {
      const { index, commitCount } = action.payload;
      state[index] = commitCount;
    },
    clearAll: (state) => { 
        state.fill(0);
    }
  },
});

export const { updateBlockCommits, clearAll } = graphSlice.actions;
export const graphReducer = graphSlice.reducer;
