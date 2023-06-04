"use client";

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../redux/features/counter/counterSlice";
import { graphReducer } from "../redux/features/graph/graphSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        graph: graphReducer
    }
});