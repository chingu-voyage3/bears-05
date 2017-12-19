import React, { Component } from 'react';
import Header from '../header';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer.js';
import Searchbar from '../header/searchbar.js';
import List from '../results/list';
import {getSearchResults} from '../api';

/* My Movie API key : https://api.themoviedb.org/3/movie/550?api_key=03b9a40695aae1f4e99a42e90e012e9e
  Movies in theaters now /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22

  https://api.themoviedb.org/3/movie/now_playing?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&page=1
*/

// Searchbar.js uses this.state.query to store the search input

class Detail extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: [],
			//query: this.props.match.params.query,
			id: this.props.match.params.id,
			result: null,
			error: false
    }
  }

	componentWillMount() {
		getSearchResults(this.state.id).then(function(response) {
			this.setState({result: response})
			console.log(response.data.results[0].overview);
		}.bind(this)).catch(function(err) {
			this.setState({
				result: "There was a problem loading the results. Please try again.",
				error: true
			})
		}.bind(this))
		console.log(this.state.id);
	}

 /*	componentDidMount() {
	  axios.get(`https://api.themoviedb.org/3/search/multi?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US&query=goodfellas&page=1&include_adult=false`)
	    .then(res => {
	      const data = res.data.results.map(obj => ({title: obj.title, overview: obj.overview, poster: obj.poster_path, vote: obj.vote_average, release: obj.release_date, type: obj.media_type}));
	      this.setState({ data });
	    });
	}
*/


	render() {
		return(
			<div>
				<Header/>

				<div className="details-container">

				<h2>Details: </h2>

			/*	<ul>
					{this.state.data.map(function(post, index){
						return (
								<div className="result-item" key={index}>
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
							)
						}
					)}
				</ul> */

					<List list={this.state.result} iserror={this.state.error} query={this.state.query}/>

			 </div>
			</div>
		)
	}
}

export default Detail
