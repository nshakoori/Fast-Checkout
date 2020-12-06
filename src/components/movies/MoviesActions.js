import * as types from '../../constants/actionTypes'
import config from '../../config'
import axios from 'axios'

export const fetchMovies = (name) => {
  return dispatch => {
    fetchMoviesRequest(dispatch)
    return axios({
      url: config.API + 's='+name,
      method: 'get'
    }).then((response) => {
        fetchMoviesSuccess(dispatch, response)
      }).catch( (error) => {
        fetchMoviesFailure(dispatch, error)
      })
  }
}

export const fetchMoviesRequest = (dispatch) => {
  dispatch({
    type: types.FETCH_MOVIES_REQUEST
  })
}

export const fetchMoviesSuccess = (dispatch, response) => {
  if(response.data.Response === 'True'){
    dispatch({
      type: types.FETCH_MOVIES_SUCCESS,
      movies: response.data
    })
  } else {
    dispatch({
      type: types.FETCH_MOVIES_FAILURE,
      error: response.data.Error
    })
  }
}

export const fetchMoviesFailure = (dispatch, error) => {
  dispatch({
    type: types.FETCH_MOVIES_FAILURE,
    error: error.toString()
  })
}  

export const selectMovie = (movieId) => {
  return dispatch => {
      dispatch({
      type: types.SELECT_MOVIE,
      movieId: movieId
    })
  }
} 

export const deselectMovie = (movieId) => {
  return dispatch => {
      dispatch({
      type: types.DESELECT_MOVIE,
      movieId: movieId
    })
  }
}

export const getSelectedMovies = () => {
  return dispatch => {
      dispatch({
      type: types.GET_SELECTED_MOVIES
    })
  }
} 
