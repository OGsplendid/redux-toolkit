import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { fetchMovies, setTitle } from "../../redux/movieSlice";
import { TMovieInitialState } from "../../models";
import { RootState } from "../../redux/store";
import { Preloader } from "../preloader/Preloader";

export type TOptions = {
  title: string,
  page: number
};

export const Input = () => {
  const [titleOnChange, setTitleOnChange] = useState<string>('');

  const data = useSelector((state: {
    movie: TMovieInitialState; state: RootState
  }) => state.movie);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleOnChange(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!titleOnChange.trim()) return;
    dispatch(fetchMovies({title: titleOnChange, page: 1}));
    dispatch(setTitle(titleOnChange));
    // setTitleOnChange('');
  }

  useEffect(() => {
    if (data.response === 'True') {
      navigate(`/movies`);
    }
    if (data.response === 'False') {
      navigate(`/bad-request`, { state: { key: `${data.error}` } });
    }
  }, [data.error, data.loading, data.response, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} className="input" type="text" name="text" value={titleOnChange} placeholder="Type your query here" />
      {data.loading && <Preloader />}
    </form>
  )
}
