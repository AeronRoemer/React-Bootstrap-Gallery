import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import queryString from 'query-string'
//axios chosen for http requests somewhat arbitrarily so I could practice with it
//but it is more backwards compatible than fetch(needs polyfill) and auto converts into JSON
import axios from 'axios';

//Component and variable imports
import apiKey from './config.js';
import Header from './Header.js'
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import PhotoResults from './PhotoResults';
import NotFound from './NotFound';

class App extends React.Component {
    state = {
        //array set to an empty array because if not, PhotoResults component will attempt to render
        // and return an error when 'photos' is not an array
        photos: [],
        loading: true,
        hotTags:[],
        tagLoading: true,
        query: 'random'
        //loading true by default, changed to false in the when http request if fulfulled
    }
    
    //calls random query of flickr when App begins
    componentDidMount(){
    //when search route is called, use location.search to search API.
   //this method is used in case the user wants to share a link with a search
   // all other seraches are handled normally. 
    if(this.props.location.search){
        console.log('search present')
        const q = queryString.parse(this.props.location.search).q
        this.searchFlickr(q)
        } else {
            axios.get(
                `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.query}&per_page=24&format=json&nojsoncallback=1`)
               .then(response => {
                   this.setState({
                       photos: response.data.photos.photo,
                       loading: false
                   })
                  })
                .catch(error => {
                 console.log('Error fetching and parsing data', error);
                });
                axios.get(
                   `https://www.flickr.com/services/rest/?method=flickr.tags.getHotList&api_key=${apiKey}&count=5&format=json&nojsoncallback=1`)
                  .then(response => {
                      this.setState({
                          hotTags: response.data.hottags.tag,
                          tagLoading: false,
                      })
                      console.log(this.state.hotTags)
                     })
                   .catch(error => {
                    console.log('Error fetching and parsing data', error);
                   });
        }
    }

    //search function. No default because form prevents empty submission
    //when called in another function, passes state information back up to App
    searchFlickr = (query = 'random') => {
        axios.get(
            `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
           .then(response => {
               this.setState({
                   photos: response.data.photos.photo,
                   loading: false
               })
               console.log('data fetched for', query)
              })
            .catch(error => {
             console.log('Error fetching and parsing data', error);
            });   
    }
    //if the loading state is true, displays text
   loading(){
    if (this.state.loading) {
    return   <Spinner animation="border" variant="warning" />}
   }
    render(){
        return (
    <BrowserRouter>
      <div className="app">
         <Header />
        <br />
          {/* Passes the search form to NavBar for routes and to the search component*/}
          <div className="nav-area">
            <SearchForm searchFlickr={this.searchFlickr}/>
            <NavBar searchFlickr={this.searchFlickr} hotTags={this.state.hotTags}/>
          </div>
        <div className="photo-container">
            {/* Returns a route and displays Cats/Dogs/Computers based on props passed to it. Clicking on buttons in NavBar starts search
            props are passed into function and destructured as recommended on tutorial, faster that way*/}
            {this.loading()}
            <Switch>
            <Route exact path='/' render=
              {() => <PhotoResults photos={this.state.photos} loading={this.state.loading}/>}
              />
              <Route path='/search/' render=
                {() => (props) => <PhotoResults {...props} photos={this.state.photos} loading={this.state.loading}/>}
                />
            <Route path={`/trending/:trending`} render=
                {(props) => <PhotoResults {...props} photos={this.state.photos} loading={this.state.loading}/>}
                />
            <Route component={() =>{
                  if (this.state.loading === false) {
                  return   <NotFound />}
            }}/>
            </Switch>
            </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;



