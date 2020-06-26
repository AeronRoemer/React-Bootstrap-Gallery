import React from 'react';
import {Link } from 'react-router-dom';
import { Container, Form, Button, Col } from 'react-bootstrap'

class SearchForm extends React.Component {
  state = {
    queryString: ''
  }
  //updates state when anything is typed in serach form
  onSearchChange = (e) => {
    this.setState({queryString: e.target.value})
  }
  //prevents default, passes strng to search function, resets search bar
   handleSubmit = (e) =>{
    e.preventDefault();
    this.props.searchFlickr(this.state.queryString);
    e.currentTarget.reset();
   }
  
  render() {
    return (
      //layout rendered with React-Bootstrap
      <Container className="justify-content-md-center search-bar">
        <Form onSubmit={this.handleSubmit}>
        <Form.Row>
            <Col>
            <Form.Control type="search" 
                name="search" 
                onChange={this.onSearchChange} 
                placeholder="Search" required/>
            </Col>
            <Col xs="auto">

                <Button variant="info"
                  type="submit" 
                  className="search-button">
                  Search
                </Button>

            </Col>
          </Form.Row>
        </Form>
    </Container>
    )
  }
}

export default SearchForm;