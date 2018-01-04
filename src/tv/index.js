import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import Header from '../header'
import Conditionals from './conditionals.js'
import AiringToday from './airingtoday'
import Popular from './popular'
import { getTvListing } from '../api'
import { CSSTransitionGroup } from 'react-transition-group'


class TV extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: "airingtoday",
			result: [],
			error: false
		}
		this.switchListing = this.switchListing.bind(this)
	}


	componentDidMount() {
	  getTvListing(this.state.active).then(function(response) {
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
		getTvListing(active).then(function(response) {
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
					this.state.active === "airingtoday" ?
					<AiringToday key="1" props={this.state.result}/> :
					this.state.active === "popular" ?
					<Popular key="2" props={this.state.result}/> :
					null
					}
				</CSSTransitionGroup>
			</div>
		</div>
		)
	}
}

export default TV
