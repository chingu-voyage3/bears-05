import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

/* My Movie API key : https://api.themoviedb.org/3/movie/550?api_key=03b9a40695aae1f4e99a42e90e012e9e
  Movies in theaters now /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22

  https://api.themoviedb.org/3/movie/now_playing?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&page=1
*/

const config = 'https://api.themoviedb.org/3/configuration?api_key=03b9a40695aae1f4e99a42e90e012e9e';
const url = 'https://image.tmdb.org/t/p/w300/';

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
      <div style={{display: "inlineBlock", width: "100%", marginLeft: "auto", marginRight: "auto", marginTop: "10em"}}>
      <h1 style={{textAlign: "center", margin: "1em"}}>In Theaters Now</h1>
      <ul style={{padding: "0", textAlign: "center"}}>
        {this.state.posts.map(function(post, index){
          return (
              <div key={index} style={{width: "30%", backgroundColor: "#34495e",
                height: "62em", textAlign: "center", margin: "1em", float: "right", border: ".5px solid #CDCDCD", boxShadow: "5px 5px 5px black"}}>

                <h3 style={{paddingTop: "1.5em"}}>{post.title}</h3>

                <p style={{padding: "20px", margin: "auto", textAlign: "left", lineHeight: "1.5", height: "20em"}}>{post.overview}</p>

                <img src={"https://image.tmdb.org/t/p/w300/" + post.poster} alt="Movie Poster" style={{margin: "auto", paddingTop: "2em"}} />

                <h4 style={{paddingTop: "2em"}}>Rating: {post.vote}</h4>

              </div>
            )
          }
        )}
      </ul>
      </div>
    );

  }

}
