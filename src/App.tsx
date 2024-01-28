import './App.css'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './components/mainPage/MainPage'
import { BadRequest } from './components/badRequest/BadRequest'
import { Movies } from './components/movies/Movies'
import { MovieItem } from './components/movie-item/MovieItem'
import { Favorite } from './components/favorite/Favorite'

function App() {

  return (
    <div className='common-wrapper'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/movies/*' element={<Movies />} />
        <Route path='/search/:id' element={<MovieItem />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='*' element={<BadRequest />} />
      </Routes>
    </div>
  )
}

export default App
