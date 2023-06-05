"use client";

import { createSlice } from "@reduxjs/toolkit";

// offset and grid
const initialState = {
  offset: 2,
  grid: Array.from({ length: 365 }, () => 0)
}

export const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    updateBlockCommits: (state, action) => {
      const { index, commitCount } = action.payload;
      const newGrid = [...state.grid]; 
      newGrid[index] = commitCount;
      var newState = {
        offset: state.offset,
        grid: newGrid,
      }
      return newState;
    },
    clearAll: (state, _) => {
      const updatedGrid = state.grid.map(() => 0); // set each item to zero (blank)
      return {
        ...state,
        grid: updatedGrid,
      };
    },
    alterSize: (_, action) => {
      const { year } = action.payload;
      const startDate = new Date(year, 0, 1); // jan 1st of the year
      const offset = startDate.getDay();
      const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
      const numberOfDays = isLeapYear ? 366 : 365;
      const updatedGrid = Array.from({ length: numberOfDays }, () => 0);
      var newState = {
        offset: offset,
        grid: updatedGrid,
      }
      return newState;
    },
    
  },
});

export const { updateBlockCommits, clearAll, alterSize } = graphSlice.actions;
export const selectOffset = (state) => state.graph.offset;
export const graphReducer = graphSlice.reducer;
