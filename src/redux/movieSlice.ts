import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import { TMovieInitialState } from "../models";

const initialState: TMovieInitialState = {
    title: '',
    favorite: [],
    movies: [],
    response: '',
    error: '',
    totalResults: '',
    loading: false,
}

// type TResponse = {
//     Response: string,
//     Search?: TMovie[],
//     totalResults?: string,
//     Error?: string,
// }

export type TOptions = {
    title: string,
    page: number
};

export const fetchMovies = createAsyncThunk(
    'movie/fetchMovies',
    async function({title, page}: TOptions) {
        console.log(title, page);
        const response = await fetch(`http://www.omdbapi.com/?apikey=9713c5e7&s=${title}&page=${page}`);
        const data = await response.json();
        return data;
    }
);

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setTitle(state, action) {
            state.title = action.payload;
        },
        addToFavorite(state, action) {
            state.favorite.push(action.payload);
        },
        removeFromFavorite(state, action) {
            state.favorite = state.favorite.filter((m) => m.imdbID !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.loading = true;
        }),
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.response = action.payload.Response;
            if (action.payload.Response === 'False') {
                state.error = action.payload.Error;
            } else {
                state.movies.push(...action.payload.Search);
                state.totalResults = action.payload.totalResults;
            }
        })
    }
});

export const { setTitle, addToFavorite, removeFromFavorite } = movieSlice.actions;
export default movieSlice.reducer;
