
import { configureStore } from "@reduxjs/toolkit";
import { graphReducer } from "../redux/features/graph/graphSlice";
import { paletteReducer } from "../redux/features/palette/paletteSlice";
import { yearReducer } from "../redux/features/year/yearSlice";
import { textReducer } from "../redux/features/text/textSlice";

export const store = configureStore({
    reducer: {
        graph: graphReducer,
        palette: paletteReducer,
        year: yearReducer,
        text: textReducer
    }
});
