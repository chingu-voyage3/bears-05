import React, { Component } from 'react'
import Header from '../header'
import About_page from './about'

class About extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			name: "",
			message: ""
		}

		this.handleMessage = this.handleMessage.bind(this)
		this.handleEmail = this.handleEmail.bind(this)
		this.handleName = this.handleName.bind(this)
	}

	handleEmail(event) {
		this.setState({
			email: event.target.value
		})
	}

	handleName(event) {
		this.setState({
			name: event.target.value
		})
	}

	handleMessage(event) {

	}

	render() {

		let Props = {
			email: {
				name: "email",
				method: this.handleEmail,
				value: this.state.email,
				type: "email"
			},
			name: {
				name: "name",
				method: this.handleName,
				value: this.state.name,
				type: "text"
			}
		}

		return(
			<div>
				<Header/>
				<About_page props={Props}/>
			</div>
		)
	}
}

export default About