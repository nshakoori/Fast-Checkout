import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MoviesList from './MoviesList'
import Error from '../errors/Error'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`

const MoviesContainer = (props) => {
  const { moviesArray, isFetching, error } = props

  if(isFetching){
    return <p>Loading Movies ...</p>
  } else if(error){
    return <Error error={error}/>
  }

  return (
    <Container>
      <MoviesList 
        movies={moviesArray} 
      />
    </Container>
  ) 
}

// MoviesContainer.propTypes = {
//   isFetching: PropTypes.bool,
//   moviesArray: PropTypes.array.isRequired,
//   error: PropTypes.string
// }
const mapStateToProps = ({ movies }) => {
  const { isFetching, moviesArray, moviesHash, error } = movies
  return { isFetching, moviesArray, moviesHash, error }
}

export default connect(mapStateToProps)(MoviesContainer)