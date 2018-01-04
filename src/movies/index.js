import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import Header from '../header'
import callSwitch from './conditionals.js'
import NowPlaying from './nowplaying'
import ComingSoon from './comingsoon'
import Popular from './popular'
import { getMovieListing } from '../api'
import { CSSTransitionGroup } from 'react-transition-group'

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
				<div className="pin">
					<CSSTransitionGroup
						transitionName="slide"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>
						{
						this.state.active === "nowplaying" ?
						<NowPlaying key="0" props={this.state.result}/> :
						this.state.active === "comingsoon" ?
						<ComingSoon key="1" props={this.state.result}/> :
						<Popular key="2" props={this.state.result}/>
						}
					</CSSTransitionGroup>
				</div>
			</div>
		)
	}
}

export default Movies