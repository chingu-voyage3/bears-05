import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <div class="footer">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
          <li><a href="#">Link 6</a></li>
        </ul>

        <a href="https://www.themoviedb.org/"><img src={'logo.png'} alt={"Blah"} class="tmdb_logo" /></a>

      </div>
    );

  }

}
