"use client";

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../redux/features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});