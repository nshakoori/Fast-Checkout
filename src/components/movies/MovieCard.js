import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import { selectMovie, deselectMovie, getSelectedMovies } from './MoviesActions'
import Movie from './Movie'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

class MovieCard extends Component {

  handleSelectionChange = (movieId, isSelected) => {
    isSelected ? this.props.selectMovie(movieId) : this.props.deselectMovie(movieId)
  }
  
  render() {
    const { selectedMovies, movie } = this.props
    const { Title, Poster, imdbID } = movie

    const isSelected = (selectedMovies || []).includes(imdbID)
  
    return (
      <Container>
        <Movie 
          id={imdbID}
          title={Title}
          poster={Poster}
          isSelected={isSelected}
          onSelectionChange={this.handleSelectionChange}
        />
      </Container>
    )
  }
}

const mapStateToProps = ({ movies }) => {
  const { selectedMovies } = movies
  return { selectedMovies }
}

const mapDispatchToProps = { selectMovie, deselectMovie, getSelectedMovies }

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)
