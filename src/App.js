import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './landing'
import Detail from './detail'
import Results from './results'
import './App.css';
// import InTheaters from './In_theaters';
// import Navigation from './Navigation';
// import Footer from './Footer';
// import Searchbar from './Searchbar';
// import TvShows from './TV_shows';
// import Chingu from './Chingu';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/detail" component={Detail}/>
          <Route path="/results" component={Results}/>
          <Route path="/" component={Landing}/>
          {/* <Navigation />
          <Searchbar />
          <TvShows />
          <InTheaters />
          <Chingu />
          <Footer /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
