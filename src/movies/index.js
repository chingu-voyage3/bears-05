import React, { Component } from 'react'
import axios from "axios";
import {withRouter, Link} from 'react-router-dom'
import Header from '../header'
import callSwitch from './conditionals.js'


class Movies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			apiQuery: this.props.match.params.category,
		}
	}



	componentDidMount() {
		axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=03b9a40695aae1f4e99a42e90e012e9e&`+callSwitch(this.state.apiQuery)+`language=en-US&page=1`)
			.then(res => {
				const posts = res.data.results.map(obj => ({name: obj.title, overview: obj.overview, poster: obj.poster_path, popularity: obj.popularity, id: obj.id}));
				this.setState({ posts });
			});
	}


	render() {
		return (

		<div>
			<Header/>
			<div className="tv_shows_container">
				<ul className="flcontainer">
					{this.state.posts.map(function(post, index){
						return (
							<Link className= "tv_detail" key={index} to={"/detail/movie/"+ post.id}>
								<div className="tv_cards" >
									<div className="img_title">
										<h3>{post.name}</h3>
										<img src={"https://image.tmdb.org/t/p/w185/" + post.poster} alt="TV Poster" />
									</div>
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

export default Movies
