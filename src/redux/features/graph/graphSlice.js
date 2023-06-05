// graphSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offset: 2,
  grid: Array.from({ length: 365 }, () => 0),
};

export const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    updateBlockCommits: (state, action) => {
      const { index, commitCount } = action.payload;
      const newGrid = [...state.grid];
      newGrid[index] = commitCount;
      return {
        ...state,
        grid: newGrid,
      };
    },
    clearAll: (state) => {
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
      return {
        offset,
        grid: updatedGrid,
      };
    },
  },
});

export const { updateBlockCommits, clearAll, alterSize } = graphSlice.actions;
export const selectOffset = (state) => state.graph.offset;
export const selectGraphGrid = (state) => state.graph.grid;
export const selectGraph = (state) => state.graph;
export const graphReducer = graphSlice.reducer;

export default graphSlice.reducer;
