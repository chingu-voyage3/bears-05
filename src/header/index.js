import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import SubMenu from './submenu'
import Searchbar from './searchbar'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			movies: ["Now Playing", "Coming Soon", "Popular"],
			tv: ["Airing Today", "Popular"]
		}
	}

	render() {
		let location = this.props.location.pathname.slice(1)
		let showSubmenu = location === "movies" ?
			true :
			location === "tv/airing_today" ?
			true :
			false
		let props = {
			submenu: location === "movies" ? this.state.movies : this.state.tv
		}
		return(
			<header className="mainHeader">
        <nav className="mainHeader__navigation">
					<Link className="mainHeader__navigation__logo" to="/">
						<img src="" alt=""/>
					</Link>
					<ul className="mainHeader__navigation__links">
						<Link className={location === "movies" ? "active" : null} to="/movies">Movies</Link>
						<Link className={location === "tv" ? "active" : null} to="/tv/airing_today">TV</Link>
						<Link className={location === "discover" ? "active" : null} to="/discover">Discover</Link>
						<Link className={location === "about" ? "active" : null} to="/about">About</Link>
					</ul>
				</nav>
				{
					showSubmenu ?
					<SubMenu props={props}/> :
					null
				}
				<Searchbar location={this.props.location.pathname}/>
			</header>
		)
	}
}

const headerWithLocation = withRouter(Header)

export default headerWithLocation
