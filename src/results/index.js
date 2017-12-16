import React, { Component } from 'react'
import Header from '../header'
import {Link} from 'react-router-dom'
import {getSearchResults} from '../api'

let searchResults
let query

class Results extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		query = this.props.match.params.query
		query ? 
			getSearchResults(query).then(function(response) {
				console.log(response)
			}).catch(function(err) {
				console.log("error")
			})
		:
		null
	}

	render() {
		return(
			<div>
				<Header/>
				<h4>Search results for ""</h4>
			</div>
		)
	}
}

export default Results