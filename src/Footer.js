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
      <div style={{ height: "15em", backgroundColor: "#222222", clear: "both"}}>
      </div>
    );

  }

}
