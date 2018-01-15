import React, { Component } from 'react';
import Header from '../header';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer.js';
import Searchbar from '../header/searchbar.js';
import List from '../results/list';
import {getDetails} from '../api/getDetails';
import {getMovieDetails} from '../api'
import MovieDetails from './moviedetails'
import TvDetails from './tvdetails'
import PersonDetails from './persondetails'


class Detail extends Component {
	constructor(props) {
    super(props);
    this.state = {
			id: this.props.match.params.id,
			result: null,
			type: this.props.match.params.type,
			movie: null,
			tv: null,
			person: null,
			error: false,
    }
  }

	componentWillMount() {
		getDetails(this.state.id).then(function(response){
			this.setState({result: response});
			console.log(response.data.original_title);
		}.bind(this)).catch(function(err) {
			this.setState({
				result:"There was a problem loading the results. Please try again.",
				error: true
			})
		}.bind(this))

		if(this.state.type === "movie") {
			getMovieDetails(this.state.type, this.state.id).then(function(response){
				this.setState({
					movie: {
						basic: response.basic,
						cast: response.cast
					}
				});

			}.bind(this)).catch(function(err) {
				this.setState({

					result:"There was a problem loading the results. Please try again.",
					error: true
				})
			}.bind(this))
		} else if(this.state.type === "tv") {
			getMovieDetails(this.state.type, this.state.id).then(function(response){
				this.setState({
					tv: {
						basic: response.basic,
						cast: response.cast
					}
				});

			}.bind(this)).catch(function(err) {
				this.setState({

					result:"There was a problem loading the results. Please try again.",
					error: true
				})
			}.bind(this))

		} else if(this.state.type === "person") {
			getMovieDetails(this.state.type, this.state.id).then(function(response){
				this.setState({
					person: {
						basic: response.basic,
						cast: response.cast
					}
				});

			}.bind(this)).catch(function(err) {
				this.setState({

					result:"There was a problem loading the results. Please try again.",
					error: true
				})
			}.bind(this))
		}
	}


	render() {
		return(
			<div>
				<Header/>

				<div className="details-container">

				<h2>Details: </h2>

				<List list={this.state.result} iserror={this.state.error} query={this.state.query}/>

			 </div>

				{
				this.state.movie !== null ?
					<MovieDetails props={this.state.movie}/> :
					this.state.tv !== null ?
					<TvDetails props={this.state.tv}/> :
					this.state.person !== null ?
					<PersonDetails props={this.state.person}/> :
				null
				}
			</div>
		)
	}
}

export default Detail
