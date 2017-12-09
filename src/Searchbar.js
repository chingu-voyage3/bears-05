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
        <div class="search-box" style={{ height: "3em", width: "50%", marginLeft: "auto", marginRight: "auto", marginTop: "7em", marginBottom: "5em"}}>
        <form style={{ display: "inline"}}>
          <input type="text" placeholder="Search for a movie, tv show, actor, etc..."/>
          <button style={{ display: "inline", float: "right"}}>Search</button>
        </form>
        </div>
      </div>
    );

  }

}
