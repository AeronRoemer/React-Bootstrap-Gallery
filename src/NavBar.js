import React from 'react';
import { Container, Nav, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  const hotTags = props.hotTags
  if (hotTags.length > 0){
    const tag1 = hotTags[0]._content
    const tag2 = hotTags[1]._content
    const tag3 = hotTags[2]._content
    return(
      <Container fluid>
      <Row>
      <Col xs="auto"><h3 className='trending'>Trending Now:</h3></Col>
      <Nav>
        <Col xs="auto"><NavLink to='/trending' onClick={()=> props.searchFlickr(tag1)}><h4>{tag1}</h4></NavLink></Col>
        <Col xs="auto"><NavLink to='/trending' onClick={()=> props.searchFlickr(tag2)}><h4>{tag2}</h4></NavLink></Col>
        <Col xs="auto"><NavLink to='/trending' onClick={()=> props.searchFlickr(tag3)}><h4>{tag3}</h4></NavLink></Col>
      </Nav>
      </Row>
      </Container>
    )
  } else {
    return null
  }
}

export default NavBar;