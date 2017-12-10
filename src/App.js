import React, { Component } from 'react';
import './App.css';
import InTheaters from './In_theaters';
import Navigation from './Navigation';
import Footer from './Footer';
import Searchbar from './Searchbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Searchbar />
        <InTheaters />
        <Footer />
      </div>
    );
  }
}

export default App;
