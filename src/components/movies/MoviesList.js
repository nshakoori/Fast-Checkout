import styled from 'styled-components'
import MovieCard from './MovieCard'
import { device, size } from '../../utils/device'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media ${device.laptop}{
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
  grid-auto-rows: minmax(6.25rem, auto);
  grid-row-gap: 2rem;
  max-width: ${size.laptop};
  align-items: center;
  margin-top: 3rem;
`

const MoviesList = ({ movies }) => {

  return (
    <Container>
      {
        (movies || []).length > 0 ? movies.map(movie => {
          return(
            <MovieCard
              key={movie.Title+movie.Year}
              movie={movie}
            />
          )
        })
        :
        null
      }
    </Container>
  )
}

export default MoviesList
