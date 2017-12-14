import React, { Component } from 'react';
import axios from "axios";

/*

Example search query that returns search for Saving Private Ryan using "multi-search". Searches movies, shows, actors, etc... all in one query.
 https://developers.themoviedb.org/3/search/multi-search

https://api.themoviedb.org/3/search/multi?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&query=saving%26private%26ryan&page=1&include_adult=false

*/

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: "Search for movies, shows, actors, etc...",
      results: []
    }
  }

  changeText(currentText) {
    this.setState({currentText});
  }

  onHandleChange(event) {
    this.setState({
      currentText: event.target.value
    });
  }

  loadSearchResults(event){
    // https://stackoverflow.com/questions/33353400/run-an-ajax-call-on-a-click-event-using-react-js#33353572
    var search = event.state.currentText;
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&query=`+ search + `&page=1&include_adult=false`)
      .then(res => {
        const results = res.data.results.map(obj => ({title: obj.title, overview: obj.overview, poster: obj.poster_path, vote: obj.vote_average}));
        this.setState({ results });
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
              <button onClick={this.loadSearchResults}>Search</button>
            </form>
          </div>

          <div class="results-container">
            <ul>
              {this.state.results.map(function(result, index){
                return (
                    <div class="search-results" key={index}>
                      <h3>{result.title}</h3>
                      <img src={"https://image.tmdb.org/t/p/w185/" + result.poster} alt="Movie Poster" />
                      <p>{result.overview}</p>
                    </div>
                  )
                }
              )}
            </ul>
          </div>

        </div>
    );

  }

}
