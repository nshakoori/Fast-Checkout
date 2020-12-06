import * as types from '../../constants/actionTypes'

const INITIAL_STATE = {
  isFetching: false,
  error: undefined,
  moviesArray: [],
  moviesHash: {},
  selectedMovies: []
}

const filterMovies = (photoId, idArray) => {
  return idArray.filter(id => id !== photoId)
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case types.FETCH_MOVIES_SUCCESS:
      let arr = []
      let hash = {}
     
      action.movies.Search.forEach((currentValue) => {
        hash[currentValue.imdbID] = currentValue
        arr.push(currentValue)
      })
      return {
        ...state,
        error: undefined,
        isFetching: false,
        moviesArray: arr,
        moviesHash: hash
      }
    case types.SELECT_MOVIE:
      return {
        ...state,
        selectedMovies: [...state.selectedMovies, action.movieId]
      }
    case types.DESELECT_MOVIE:
      return {
        ...state,
        selectedMovies: filterMovies(action.movieId, state.selectedMovies)
      }
    case types.GET_SELECTED_MOVIES:
      return {
        ...state
      }
    default:
      return state
  }
}