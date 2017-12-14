import React, { Component } from 'react';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <div class="navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">In Theaters</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    );

  }

}
