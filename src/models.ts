export type TMovie = {
    Poster: string,
    Title: string,
    Year: string,
    Genre: string,
    Runtime: string,
    Director: string,
    Actors: string,
    imdbRating: string,
    imdbID: string,
    favorite?: boolean,
}

export type TMovieInitialState = {
    title: string,
    favorite: TMovie[],
    movies: TMovie[],
    response: string,
    error?: string,
    totalResults?: string,
    loading: boolean,
}
