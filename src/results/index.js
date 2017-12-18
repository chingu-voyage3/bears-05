import React, { Component } from 'react'
import Header from '../header'
import {getSearchResults} from '../api'
import List from './list'

class Results extends Component {
	constructor(props) {
		super(props)
		this.state = {
			query: this.props.match.params.query,
			result: null,
			error: false
		}
	}

	componentWillMount() {
		getSearchResults(this.state.query).then(function(response) {
			this.setState({result: response})
		}.bind(this)).catch(function(err) {
			this.setState({
				result: "There was a problem loading the results. Please try again.",
				error: true
			})
		}.bind(this))
	}

	render() {
		return(
			<div>
				<Header/>
					<List list={this.state.result} iserror={this.state.error} query={this.state.query}/>
			</div>
		)
	}
}

export default Results