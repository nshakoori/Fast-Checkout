import React, { Component } from "react"
import { connect } from "react-redux"
import styled from 'styled-components'
import MoviesList from '../movies/MoviesList'
import { getSelectedMovies } from '../movies/MoviesActions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class CheckoutContainer extends Component {
  componentDidMount() {
    this.props.getSelectedMovies()
  }

  getCheckoutCart = (moviesIdsArray) => {
    const { moviesHash } = this.props
    return moviesIdsArray.map(id => {
      return moviesHash[id]
    })
  }

  render() {
    const { selectedMovies } = this.props
    const checkoutCart = this.getCheckoutCart(selectedMovies)
  
    return (
      <Container>
        <MoviesList movies={checkoutCart}/>
      </Container>
    )
  }
}

const mapStateToProps = ({ movies }) => {
  return { 
    selectedMovies: movies.selectedMovies,
    moviesHash: movies.moviesHash
  }
}

const mapDispatchToProps = { getSelectedMovies }

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)