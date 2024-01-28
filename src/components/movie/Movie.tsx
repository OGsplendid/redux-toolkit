import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { addToFavorite, removeFromFavorite } from "../../redux/movieSlice";
import { TMovie, TMovieInitialState } from "../../models";

interface IMovieProps {
  movie: TMovie,
}

export const Movie = ({ movie }: IMovieProps) => {
  const favorite = useSelector((state: { movie: TMovieInitialState }) => state.movie.favorite);
  const dispatch = useDispatch();

  const handleClick = (movie: TMovie) => {
    favorite.some((m) => m.imdbID === movie.imdbID) ? dispatch(removeFromFavorite(movie.imdbID)) : dispatch(addToFavorite(movie));
  }

  return (
    <div className="movie">
      <Link to={`/search/${movie.imdbID}`}><img src={movie.Poster === 'N/A' ? 'public/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg' : movie.Poster} className="movie-img" /></Link>
      <h3 className="movie-title">{movie.Title}</h3>
      <h4 className="movie-year">{movie.Year}</h4>
      <button 
        onClick={() => handleClick(movie)} 
        type="button" 
        className={favorite.some((m) => m.imdbID === movie.imdbID) ? "toggle-fav checked" : "toggle-fav"}>
      </button>
    </div>
  )
}
