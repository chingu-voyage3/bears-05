import React, { Component } from 'react';

export default class Chingu extends Component {

  render() {
    return (
        <div className="chingu">
          <h2>About this project</h2>
          <hr/>
          <img src={'chingu.png'} alt={"Chingu logo"} className="chingu_logo" />
          <h4>This project was built as part of the <a href="https://github.com/Chingu-cohorts/Chingu-dev-adventures">Chingu cohort</a></h4>
        </div>
    );

  }

}
