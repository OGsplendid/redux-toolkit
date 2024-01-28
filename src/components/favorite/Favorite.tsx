import { useSelector } from "react-redux"
import { TMovie, TMovieInitialState } from "../../models"
import { Movie } from "../movie/Movie";
import { BadRequest } from "../badRequest/BadRequest";
import { FavLogo } from "../favLogo/FavLogo";

export const Favorite = () => {
  const favorite = useSelector((state: {movie: TMovieInitialState}) => state.movie.favorite);

  return (
    <div className="common-page">
      <div className="header">
        <FavLogo />
      </div>
      <div className="movies-list">
        {favorite.length ?
          favorite.map((item: TMovie) => (
            <Movie key={item.imdbID} movie={item} />
          )) : <BadRequest />}
      </div>
    </div>
  )
}
