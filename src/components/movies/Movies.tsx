import { Movie } from "../movie/Movie"
import { useSelector } from "react-redux"
import { Input } from "../input/Input";
import { FavLogo } from "../favLogo/FavLogo";
import { ResultQuantity } from "../resultQuantity/ResultQuantity";
import { TMovie, TMovieInitialState } from "../../models";
import { RootState } from "../../redux/store";
import { LoadMore } from "../load-more/LoadMore";

export const Movies = () => {
  const data = useSelector((state: {
    movie: TMovieInitialState; state: RootState 
  }) => state.movie);

  return (
    <div className="common-page">
      <div className="header">
        <Input />
        <ResultQuantity />
        <FavLogo />
      </div>
      <div className="movies-list">
        {data.movies && data.movies.map((item: TMovie) => (
          <Movie key={item.imdbID} movie={item} />
        ))}
      </div>
      {data.movies.length < Number(data.totalResults) && <LoadMore />}
  </div>
  )
}
