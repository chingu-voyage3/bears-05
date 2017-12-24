import React, { Component } from 'react'
import axios from "axios";
import {withRouter, Link} from 'react-router-dom'
import Header from '../header'

class TV extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			apiQuery: this.props.match.params.name,
			heading : "Airing Today"
		}
	}

	componentDidMount() {
	  axios.get(`https://api.themoviedb.org/3/tv/` + this.state.apiQuery +`?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&page=1`)
	    .then(res => {
	      const posts = res.data.results.map(obj => ({name: obj.name, overview: obj.overview, poster: obj.poster_path, popularity: obj.popularity, id: obj.id}));
	      this.setState({ posts });
	    });
	}


	  render() {
	    return (

			<div>
				<Header/>
				<div className="tv_shows_container">
		      <h1>{this.state.heading}</h1>
		      <ul>
		        {this.state.posts.map(function(post, index){
		          return (
								<Link className= "tv_detail" to={"/detail/tv/"+ post.id}>
		              <div className="tv_cards" key={index}>

		                <h3>{post.name}</h3>

		                <img src={"https://image.tmdb.org/t/p/w185/" + post.poster} alt="TV Poster" />

		                <p>{post.overview}</p>

		                <h4>Rating: {post.popularity}</h4>

		              </div>
								</Link>
		            )
		          }
		        )}
		      </ul>
	      </div>
			</div>
		)
	}
}

export default TV
