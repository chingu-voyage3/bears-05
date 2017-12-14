import React, { Component } from 'react';
import axios from "axios";

/* My Movie API key : https://api.themoviedb.org/3/movie/550?api_key=03b9a40695aae1f4e99a42e90e012e9e
  Movies in theaters now /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22

  https://api.themoviedb.org/3/movie/now_playing?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&page=1
*/


export default class TvShows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }


componentDidMount() {
  axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&page=1`)
    .then(res => {
      const posts = res.data.results.map(obj => ({name: obj.name, overview: obj.overview, poster: obj.poster_path, popularity: obj.popularity}));
      this.setState({ posts });
    });
}


  render() {
    return (
      <div class="tv_shows_container">
      <h1>Popular TV Shows</h1>
      <ul>
        {this.state.posts.map(function(post, index){
          return (
              <div class="tv_cards" key={index}>

                <h3>{post.name}</h3>

                <img src={"https://image.tmdb.org/t/p/w185/" + post.poster} alt="TV Poster" />

                <p>{post.overview}</p>

                <h4>Rating: {post.popularity}</h4>

              </div>
            )
          }
        )}
      </ul>
      </div>
    );

  }

}
