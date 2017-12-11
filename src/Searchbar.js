import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: "Search for movies, shows, actors, etc...",
      currentText: " "
    }
  }

  changeText(currentText) {
    this.setState({currentText});
    //console.log({currentText});
  }




  onHandleChange(event) {
    this.setState({
      currentText: event.target.value
    });
  }

  render() {
    return (
        <div>
          <div class="theater">
            <img src={'movie_theater3.jpg'} alt={"Theater"} class="theater_background" height="550px" width="100%" />
          </div>


          <div class="search-box">
            <form>
              <input type="text" placeholder={this.state.currentText} onChange={(event) => this.onHandleChange(event)} />
              <button onClick={this.changeText.bind(this, 'currentText')}>Search</button>
            </form>
          </div>
        </div>
    );

  }

}
