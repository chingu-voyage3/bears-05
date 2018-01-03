import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import Header from '../header'
import callSwitch from './conditionals.js'
import NowPlaying from './nowplaying'
import ComingSoon from './comingsoon'
import Popular from './popular'
import { getMovieListing } from '../api'

class Movies extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active: "nowplaying",
			error: false,
			result: []
		}
		this.switchListing = this.switchListing.bind(this)
	}

	componentDidMount() {
		getMovieListing(this.state.active).then(function(response) {
			this.setState({
				result: response.data.results
			})
		}.bind(this)).catch(function(err) {
			this.setState({
				result: "There was a problem loading the results. Please try again.",
				error: true
			})
		}.bind(this))
	}

	switchListing(active) {
		getMovieListing(active).then(function(response) {
			this.setState({
				active: active,
				result: response.data.results
			})
		}.bind(this)).catch(function(err) {
			this.setState({
				result: "There was a problem loading the results. Please try again.",
				error: true
			})
		}.bind(this))
	}

	render() {
		return (
			<div>
				<Header props={this.switchListing} active={this.state.active}/>
				{
				this.state.active === "nowplaying" ?
				<NowPlaying props={this.state.result}/> :
				this.state.active === "comingsoon" ?
				<ComingSoon props={this.state.result}/> :
				<Popular props={this.state.result}/>
				}
			</div>
		)
	}
}

export default Movies