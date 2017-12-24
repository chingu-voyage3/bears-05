import React, { Component } from 'react';
import Header from '../header';
import {Link} from 'react-router-dom';
import Footer from '../Footer.js';
import Searchbar from '../header/searchbar.js';
import DetailPage from './detail';
import {getDetails} from '../api';


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

				<DetailPage details={this.state.result} iserror={this.state.error}/>

			 </div>
			</div>
		)
	}
}

export default Detail