import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <div>
        <div class="search-box">
        <form>
          <input type="text" placeholder="Search for a movie, tv show, actor, etc..."/>
          <button>Search</button>
        </form>
        </div>
      </div>
    );

  }

}
