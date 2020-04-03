import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//axios chosen for http requests somewhat arbitrarily so I could practice with it
//but it is more backwards compatible than fetch(needs polyfill) and auto converts into JSON
import axios from 'axios';

//Component and variable imports
import apiKey from './config.js';
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import PhotoResults from './PhotoResults';

class App extends React.Component {
    state = {
        //array set to an empty array because if not, PhotoResults component will attempt to render
        // and return an error when 'photos' is not an array
        photos: [],
        query:'random'
    }

    componentDidMount(){
     axios.get(
         `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({photos: response.data.photos.photo
            })
           })
         .catch(error => {
          console.log('Error fetching and parsing data', error);
         });
    }

    //search function with default set to random
    searchFlickr = (query) => {
        axios.get(
            `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
           .then(response => {
               this.setState({photos: response.data.photos.photo
               })
              })
            .catch(error => {
             console.log('Error fetching and parsing data', error);
            });   
    }

    render(){
        return (
    <BrowserRouter>
      <div className="app">
        <h1>Flickr API Browser</h1>
        <br />
          {/* Passes the search form to NavBar for routes and to the search component*/}
        <SearchForm searchFlickr={this.searchFlickr}/>
        <NavBar searchFlickr={this.searchFlickr}/>
        <div className="photo-container">
            <h3>Results</h3>
            {/* Returns a route and displays Cats/Dogs/Computers based on props passed to it. Clicking on buttons in NavBar starts search
            props are passed into function and destructured as recommended on tutorial, faster that way*/}
            <Route exact path='/' render=
              {(props) => <PhotoResults {...props} photos={this.state.photos}/>}
              />
            <Route path='/cats' render=
                {(props) => <PhotoResults {...props} photos={this.state.photos} />}
                />
            <Route path='/dogs' render=
                {(props) => <PhotoResults {...props} photos={this.state.photos} />}
                />
            <Route path='/computers' render=
                {(props) => <PhotoResults {...props} photos={this.state.photos} />}
                />
            </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;