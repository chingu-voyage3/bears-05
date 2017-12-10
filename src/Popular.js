import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

// Configuration   https://api.themoviedb.org/3/configuration?api_key=03b9a40695aae1f4e99a42e90e012e9e

// /discover/movie?sort_by=popularity.desc


export default class PopularMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }


componentDidMount() {
  axios.get(`https://api.themoviedb.org/discover/movie?sort_by=popularity.desc?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&page=1`)
    .then(res => {
      const posts = res.data.results.map(obj => ({title: obj.title, overview: obj.overview, poster: obj.poster_path, vote: obj.vote_average}));
      console.log(posts);
      this.setState({ posts });
    });
}


  render() {
    return (
      <div style={{display: "inlineBlock", width: "100%", margin: "auto 0"}}>
      <h1 style={{textAlign: "center", margin: "1em"}}>Popular Movies</h1>
      <ul style={{padding: "0", textAlign: "center"}}>
        {this.state.posts.map(function(post, index){
          return (
              <div key={index} style={{width: "30%", backgroundColor: "#34495e",
                height: "35em", textAlign: "center", margin: "1em", float: "right", border: ".5px solid #CDCDCD", boxShadow: "5px 5px 5px black"}}>

                <h3 style={{paddingTop: "1.5em"}}>{post.title}</h3>

                <p style={{padding: "20px", margin: "auto", textAlign: "left", lineHeight: "1.5"}}>{post.overview}</p>


              </div>
            )
          }
        )}
      </ul>
      </div>
    );

  }

}
