import React from 'react';
import {Link } from 'react-router-dom';
import { Container, Form, Button, Col } from 'react-bootstrap'

class SearchForm extends React.Component {
  state = {
    queryString: 'Search'
  }
  //updates state when anything is typed in serach form
  onSearchChange = (e) => {
    this.setState({queryString: e.target.value})
  }
  //prevents default, passes strng to search function, resets search bar
   handleSubmit = (e) =>{
     console.log('search')
    this.props.searchFlickr(this.state.queryString);
   }
  
  render() {
    return (
      //layout rendered with React-Bootstrap
      <Container className="justify-content-md-center search-bar">
        <Form>
        <Form.Row>
            <Col>
            <Form.Control type="search" 
                name="search" 
                onChange={this.onSearchChange} 
                placeholder='Search' required/>
            </Col>
            <Col xs="auto">
            <Link to={{
              pathname: '/search',
              search: `?q=${this.state.queryString}`
            }}
            >
                <Button variant="info"
                  type="submit" 
                  className="search-button"
                  onClick={this.handleSubmit}>
                  Search
                </Button>
              </Link>
            </Col>
          </Form.Row>
        </Form>
    </Container>
    )
  }
}

export default SearchForm;