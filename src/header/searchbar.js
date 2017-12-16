import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Searchbar extends Component {
	render() {
		return(
			<div className="searchbar">
				<input className="searchbar__input" type="text" placeholder="Search by title, actor, director..."/>
                <div className="searchbar__button">
                    <i className="material-icons">search</i>
                </div>
			</div>
		)
	}
}

export default Searchbar