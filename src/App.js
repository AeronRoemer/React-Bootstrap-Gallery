import React from 'react';
import axios from 'axios';

//Component and variable imports
import apiKey from './config.js';
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import PhotoResults from './PhotoResults';

class App extends React.Component {
    state ={
        //array set to an empty array because if not, PhotoResults component will attempt to render
        // and return an error when 'photos' is not an array
        photos: []
    }

    componentDidMount(){
     axios.get(
         `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=25&format=json&nojsoncallback=1`)
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
    <div className="app">
        <SearchForm />
        <NavBar />
        <div class="photo-container">
        <h2>Results</h2>
            <ul>
            <PhotoResults photos={this.state.photos}/>
            </ul>
        </div>
    </div>
    );
  }
}

export default App;