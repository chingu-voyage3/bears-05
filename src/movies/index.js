import React, { Component } from 'react'
import Header from '../header'

class Movies extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div>
				<Header/>
				Movies Page
			</div>
		)
	}
}

export default Movies