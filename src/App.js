import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Landing from './landing'
import Detail from './detail'
import SearchResults from './results'
import './App.css';
import InTheaters from './In_theaters';
import Navigation from './Navigation';
import Footer from './Footer';
import Searchbar from './Searchbar';
import TvShows from './TV_shows';
import Chingu from './Chingu';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Landing}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/results" component={SearchResults}/>
          <Navigation />
          <Searchbar />
          <TvShows />
          <InTheaters />
          <Chingu />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
