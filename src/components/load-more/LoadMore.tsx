import { useDispatch, useSelector } from "react-redux";
import { TMovieInitialState } from "../../models";
import { RootState } from "../../redux/store";
import { fetchMovies } from "../../redux/movieSlice";
import { useState } from "react";

export const LoadMore = () => {
  const [page, setPage] = useState<number>(2);
  const dispatch = useDispatch();

  const data = useSelector((state: {
    movie: TMovieInitialState; state: RootState 
  }) => state.movie);

  const handleLoadMore = () => {
    dispatch(fetchMovies({title: data.title, page}));
    setPage((prev) => prev += 1);
  }

  return (
    <button onClick={handleLoadMore} className="load-more">Load more</button>
  )
}
