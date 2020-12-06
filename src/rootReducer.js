import { combineReducers } from "redux";
import MoviesReducer from './components/movies/MoviesReducer'

export default combineReducers({
  movies: MoviesReducer
})
