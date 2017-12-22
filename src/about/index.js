import React, { Component } from 'react'
import Header from '../header'
import About_page from './about'

class About extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			name: "",
			message: "",
			member: null
		}

		this.handleMessage = this.handleMessage.bind(this)
		this.handleEmail = this.handleEmail.bind(this)
		this.handleName = this.handleName.bind(this)
		this.handleSelectMember = this.handleSelectMember.bind(this)
	}

	handleSelectMember(event, member) {
		this.setState({
			member: member
		})
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
			selectMember: {
				options: ["Travis", "Nick", "Josh", "Matt"],
				name: this.state.member,
				method: this.handleSelectMember
			},
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