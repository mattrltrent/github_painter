"use client";

import { configureStore } from "@reduxjs/toolkit";
import { graphReducer } from "../redux/features/graph/graphSlice";
import { paletteReducer } from "../redux/features/palette/paletteSlice";

export const store = configureStore({
    reducer: {
        graph: graphReducer,
        palette: paletteReducer
    }
});