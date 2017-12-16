import React, { Component } from 'react';
import axios from "axios";

/* My Movie API key : https://api.themoviedb.org/3/movie/550?api_key=03b9a40695aae1f4e99a42e90e012e9e
  Movies in theaters now /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22

  https://api.themoviedb.org/3/movie/now_playing?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&page=1
*/


export default class InTheaters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }


componentDidMount() {
  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&page=1`)
    .then(res => {
      const posts = res.data.results.map(obj => ({title: obj.title, overview: obj.overview, poster: obj.poster_path, vote: obj.vote_average}));
      this.setState({ posts });
    });
}


  render() {
    return (
      <div className="in_theaters_container">
      <h1>In Theaters Now</h1>
      <ul>
        {this.state.posts.map(function(post, index){
          return (
              <div className="movie_cards" key={index}>

                <h3>{post.title}</h3>

                <img src={"https://image.tmdb.org/t/p/w185/" + post.poster} alt="Movie Poster" />

                <p>{post.overview}</p>

                <h4>Rating: {post.vote}</h4>

              </div>
            )
          }
        )}
      </ul>
      </div>
    );

  }

}
