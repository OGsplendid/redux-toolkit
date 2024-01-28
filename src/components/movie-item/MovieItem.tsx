import { useEffect, useState } from "react";
import { TMovie, TMovieInitialState } from "../../models";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../redux/movieSlice";
import { BackBtn } from "../backBtn/BackBtn";

export const MovieItem = () => {
  const [item, setItem] = useState<TMovie>();
  const { id } = useParams();

  const dispatch = useDispatch();
  const favorite = useSelector((state: { movie: TMovieInitialState }) => state.movie.favorite);

  async function requestItem() {
    const request = await fetch(`https://www.omdbapi.com?apikey=9713c5e7&i=${id}`);
    const data = await request.json();
    setItem(data);
  }

  const handleClick = () => {
    favorite.some((m) => m.imdbID === item?.imdbID) ? dispatch(removeFromFavorite(item?.imdbID)) : dispatch(addToFavorite(item));
  }

  useEffect(() => {
    requestItem();
  }, []);

  return (
    <div className="movie-item">
        <img className="item-poster" src={item?.Poster === 'N/A' ? 'public/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg' : item?.Poster} />
        <div className="movie-info">
          <h2 className="item-title">{item?.Title}</h2>
          <h3 className="item-year">{item?.Year}</h3>
          <span className="item-genre">{`Genre: ${item?.Genre}`}</span>
          <span className="item-runtime">{`Runtime: ${item?.Runtime}`}</span>
          <span className="item-director">{`Director: ${item?.Director}`}</span>
          <span className="item-actors">{`Actors: ${item?.Actors}`}</span>
          <span className="item-imdbRating">{`Rating: ${item?.imdbRating}/10`}</span>
        </div>
        <button 
          onClick={handleClick} 
          type="button" 
          className={favorite.some((m) => m.imdbID === item?.imdbID) ? "item-toggle-fav checked" : "item-toggle-fav"}>
        </button>
        <BackBtn />
    </div>
  )
}
