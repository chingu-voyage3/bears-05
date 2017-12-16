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
      header: "",
      results: []
    }
  }

  onHandleChange(event) {
    this.setState({
      currentText: event.target.value
    });
  }

  loadSearchResults(event){
    event.preventDefault();
    // https://stackoverflow.com/questions/33353400/run-an-ajax-call-on-a-click-event-using-react-js#33353572
    var search = this.state.currentText;
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=7974b2e242ba6be382cf2078b6afb7c0&language=en-US&query=`+ search + `&page=1&include_adult=false`)
      .then(res => {
        const results = res.data.results.map(obj => ({title: obj.title, overview: obj.overview, poster: obj.poster_path, vote: obj.vote_average}));
        this.setState({
          results,
          header: "Search Results"
         });
      });
  }


  render() {
    return (
        <div>
          <div className="theater">
            <img src={'movie_theater3.jpg'} alt={"Theater"} className="theater_background" height="550px" width="100%" />
          </div>

          <div className="search-box">
            <form>
              <input type="text" placeholder={this.state.currentText} onChange={(event) => this.onHandleChange(event)} />
              <button onClick={this.loadSearchResults.bind(this)}><img id ="mag" src ={'magnify2.png'} alt=""/></button>
            </form>
          </div>

          <div className="in_theaters_container">
            <h1>{this.state.header}</h1>

            <div className="results-container">
              <ul>
                {this.state.results.map(function(result, index){
                  return (
                      <div className="movie_cards" key={index}>

                        <h3>{result.title}</h3>

                        <img src={"https://image.tmdb.org/t/p/w185/" + result.poster} alt="TV Poster" />

                        <p>{result.overview}</p>

                        <h4>Rating: {result.vote}</h4>

                      </div>
                    )
                  }
                )}
              </ul>
            </div>
          </div>

        </div>
    );

  }

}
