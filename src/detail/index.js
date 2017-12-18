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
	  axios.get(`https://api.themoviedb.org/3/search/multi?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&query=justice%26league&page=1&include_adult=false`)
	    .then(res => {
	      const data = res.data.results.map(obj => ({title: obj.title, overview: obj.overview, poster: obj.poster_path, vote: obj.vote_average, release: obj.release_date, type: obj.media_type}));
	      this.setState({ data });
	    });
	}

	render() {
		return(
			<div>
				<Header/>

				<div className="details-container">

				<h2>Search Results: </h2>

				<ul>
					{this.state.data.map(function(post, index){
						return (
								<div className="result-item" key={index}>

									<h3>{post.title}</h3>

									<img src={"https://image.tmdb.org/t/p/w300/" + post.poster} alt="Movie Poster" />

									<div className="info">
										<p>6.8</p>
										<p>PG-13</p>
										<p>{post.type}</p>
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
							)
						}
					)}
				</ul>
			 </div>
			</div>
		)
	}
}

export default Detail
