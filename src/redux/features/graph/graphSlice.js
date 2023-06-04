"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = Array.from({ length: 365 }, () => 0); // Initial commit count for each block

export const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    updateBlockCommits: (state, action) => {
      const { index, commitCount } = action.payload;
      state[index] = commitCount;
    },
  },
});

export const { updateBlockCommits } = graphSlice.actions;
export const graphReducer = graphSlice.reducer;
