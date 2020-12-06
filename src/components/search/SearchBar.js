import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fetchMovies } from '../movies/MoviesActions'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`
const Input = styled.input`
  padding: 0.5rem;
`

const Button = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
`

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleKeyDown= (e) => {
    if (e.key === 'Enter') {
      this.getMovies(this.state.inputValue)
    }
  }

  handleClick = () => {
    this.getMovies(this.state.inputValue)
  }

  getMovies = (name) => {
    this.props.fetchMovies(name)
  }

  render() {
    const { inputValue } = this.state
    return (
      <Container>
        <Input
          placeholder='Search By Name'
          type='text'
          value={inputValue}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <Button onClick={this.handleClick}>Search</Button>
      </Container>
    )
  }
}

const mapStateToProps = ({ movies }) => {
  const { isFetching, moviesArray, moviesHash, error } = movies
  return { isFetching, moviesArray, moviesHash, error }
}

const mapDispatchToProps = { fetchMovies }

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)