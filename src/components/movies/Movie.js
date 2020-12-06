
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, ICON_CLASSES } from '../styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  position: relative;
`

const Title = styled.p`
  margin: 0;
  position: absolute;
  bottom: 15.125rem;
`

const UnselectedIcon = styled(Icon)`
  visibility: hidden;
`

const Image = styled.div`
  min-height: 12.5rem;
  margin: 1rem 0 2rem 0;
  background-image: url(${(props) => props.poster ? props.poster : 'movie poster'});
  background-size: cover;
  background-repeat: no-repeat;
  padding-right: 5rem;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  &:hover ${UnselectedIcon} {
    visibility: visible;
  }
`

const Movie = ({ id, title, poster, isSelected, onSelectionChange }) => { 
  return(
    <Container>
      <Image poster={poster} onClick={() => onSelectionChange(id, !isSelected)}>
      {
        isSelected ? <Icon className={ICON_CLASSES.largeselected} /> : <UnselectedIcon className={ICON_CLASSES.largeUnselected}/>
      }
      </Image>
      <Title>{title}</Title>
    </Container>
  )
}

export default Movie