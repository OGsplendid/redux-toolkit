import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export default store
