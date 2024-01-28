import { useSelector } from "react-redux"
import { RootState } from "../../redux/store";
import { TMovieInitialState } from "../../models";

export const ResultQuantity = () => {
  const totalResults = useSelector((state: {
    movie: TMovieInitialState; state: RootState 
}) => state.movie.totalResults)

  return (
    <span className="result-quantity">{totalResults}</span>
  )
}
