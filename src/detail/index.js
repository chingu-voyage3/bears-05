import React, { Component } from 'react';
import Header from '../header';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer.js';
import Searchbar from '../header/searchbar.js';

/* My Movie API key : https://api.themoviedb.org/3/movie/550?api_key=03b9a40695aae1f4e99a42e90e012e9e
  Movies in theaters now /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22

  https://api.themoviedb.org/3/movie/now_playing?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&page=1
*/

// Searchbar.js uses this.state.query to store the search input

class Detail extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }


	componentDidMount() {
	  axios.get(`https://api.themoviedb.org/3/`+this.props.match.params.type+`/`+this.props.match.params.id+`?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US`)
	    .then(res => {
	      console.log(res)
				const data = {title: res.data.name, overview: res.data.overview, poster: res.data.poster_path, vote: res.data.vote_average,
					 release: res.data.release_date, type: res.data.media_type};
	      this.setState({ data });
	    });
	}

	render() {
	  const post = this.state.data
		return(
			<div>
				<Header/>

				<div className="details-container">

				<h2>Search Results: </h2>

				<ul>
					<div className="result-item">

						<h3>{post.title}</h3>

						<img src={"https://image.tmdb.org/t/p/w300/" + post.poster} alt="Movie Poster" />

						<div className="info">
							<div className="rating">
								<span>{post.vote}</span>
								<span><i class="material-icons">star_rate</i></span>
							</div>

							<p>{post.type}</p>
							<p>{post.release}</p>
							<p>{post.language}</p>
							<p>{post.country}</p>

							<p class="italic">Directed by:</p>
							<p>Zack Snyder</p>

							<p class="italic">Written by:</p>
							<p>Chris Terrio</p>

							<p class="italic">Starring:</p>
							<ul>
								<li>Ben Affleck</li>
								<li>Henry Cavil</li>
								<li>Amy Adams</li>
								<li>Gal Gadot</li>
								<li>Ezra Miller</li>
							</ul>
						</div>

						<p className="overview">{post.overview}</p>
					</div>
				</ul>
			 </div>
			</div>
		)
	}
}

export default Detail
