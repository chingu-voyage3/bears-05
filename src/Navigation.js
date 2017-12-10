import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <div style={{ height: "4em", backgroundColor: "#222222", position: "fixed", width: "100%", top: "0"}}>
        <ul style={{ display: "inlineBlock", float: "right", marginTop: "1.2em"}}>
          <li style={{ display: "inline", color:"white", margin: "1em"}}><a href="#">Home</a></li>
          <li style={{ display: "inline", color:"white", margin: "1em"}}><a href="#">In Theaters</a></li>
          <li style={{ display: "inline", color:"white", margin: "1em"}}><a href="#">Search</a></li>
          <li style={{ display: "inline", color:"white", margin: "1em"}}><a href="#">About</a></li>
        </ul>
      </div>
    );

  }

}
