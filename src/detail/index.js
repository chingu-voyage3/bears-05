import React, { Component } from 'react';
import Header from '../header';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer.js';
import Searchbar from '../header/searchbar.js';
import List from '../results/list';
import {getSearchResults} from '../api';
import {getDetails} from '../api/getDetails';


class Detail extends Component {
	constructor(props) {
    super(props);
    this.state = {
			id: this.props.match.params.id,
			result: null,
			error: false,
    }
  }

	componentWillMount() {
		getDetails(this.state.id).then(function(response){
			this.setState({result: response});
			console.log(response.data.original_title);
			console.log(response.data.homepage);
			console.log(response.data.popularity);
			console.log(response.data.release_data);
			console.log(response.data.overview);
		}.bind(this)).catch(function(err) {
			this.setState({
				result:"There was a problem loading the results. Please try again.",
				error: true
			})
		}.bind(this))
	}

	render() {
		return(
			<div>
				<Header/>

				<div className="details-container">

				<h2>Details: </h2>


			 </div>
			</div>
		)
	}
}

export default Detail
