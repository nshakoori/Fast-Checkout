import React, { Children } from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import { Icon, ICON_CLASSES } from '../styles'
import { Link } from 'react-router-dom';
import { size } from '../../utils/device'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  padding: 1rem 0.5rem;
  height: 3.125rem;
  min-width: ${size.mobile};
  width: 100%;
`

const RightSideContainer = styled.div`
  display: flex;
  align-self: center;
  padding: 1rem;
`

const Paragraph = styled.p`
  margin: 0;
  color: white;
  font-size: 0.85rem;
  font-weight: bold;
  z-index: 1;
  margin-top: 13px;
  margin-right: -36px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const NavBar = (props) => {
  const { selectedMovies } = props

  return(
    <Container>
      <StyledLink to="/">
        <Icon className={ICON_CLASSES.largeHome} />
      </StyledLink>
      <RightSideContainer>
      <Paragraph>{selectedMovies.length}</Paragraph>
        <StyledLink to="/checkout">
          <Icon className={ICON_CLASSES.largeCart} />
        </StyledLink>
      </RightSideContainer>
    </Container>
  )
}

const mapStateToProps = ({ movies }) => {
  return { 
    selectedMovies: movies.selectedMovies,
  }
}

export default connect(mapStateToProps)(NavBar)