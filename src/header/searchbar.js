import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Searchbar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			query: ""
		}
		this.handleChange = this.handleChange.bind(this)
		this.clearInput = this.clearInput.bind(this)
	}

	handleChange(event) {
		this.setState({
		  query: event.target.value
		})
	}

	clearInput() {
		this.setState({
			query: ""
		})
	}

	render() {
		let location = this.props.location
		let redirectUrl = this.state.query === "" ? location : "/results/" + `${this.state.query}`

		return(
			<div className="searchbar">
				<input onChange={this.handleChange} className="searchbar__input" type="text" placeholder="Search by title, actor, director..."/>
					<Link onClick={this.clearInput} to={redirectUrl} className="searchbar__button">
						<i className="material-icons">search</i>
					</Link>
			</div>
		)
	}
}

export default Searchbar
