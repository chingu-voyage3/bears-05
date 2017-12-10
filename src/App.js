import React, { Component } from 'react';
import './App.css';
import InTheaters from './In_theaters';
import Navigation from './Navigation';
import Footer from './Footer';
import Searchbar from './Searchbar';
import TvShows from './TV_shows';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Searchbar />
        <TvShows />
        <InTheaters />
        <Footer />
      </div>
    );
  }
}

export default App;
