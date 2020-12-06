import React from 'react'
import styled from 'styled-components'
import MoviesContainer from '../movies/MoviesContainer'
import SearchBar from '../search/SearchBar'
import NavBar from '../navBar/NavBar'

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 1rem 0.5rem;
  align-items: center;
`
const Header = styled.p`
  margin: 0;
  padding-top: 3rem;
  font-weight: bold;
`
const HomeIndex = () => {
  return(
    <Container>
      {/* <NavBar/> */}
      <Header>What Movie Are You Looking For?</Header>
      <SearchBar />
      <MoviesContainer />
      
    </Container>
  )
}

export default HomeIndex