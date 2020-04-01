import React from 'react';

//Component and variable imports
import apiKey from './config.js';
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import PhotoResults from './PhotoResults';

class App extends React.Component {
    render(){
        return (
    <div className="app">
        <SearchForm />
        <NavBar />
        <PhotoResults />
    </div>
    );
  }
}

export default App;