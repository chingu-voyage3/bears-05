import React from 'react'

const SubMenu = (props) => {

	return(
		<nav className="submenu">
			{
			props.loc === "movies" ?
			<ul>
				<li onClick={(e) => {props.switchListing("nowplaying")}} className={props.active === "nowplaying" ? "active" : null}>Now Playing</li>
				<li onClick={(e) => {props.switchListing("comingsoon")}} className={props.active === "comingsoon" ? "active" : null}>Coming Soon</li>
				<li onClick={(e) => {props.switchListing("popular")}} className={props.active === "popular" ? "active" : null}>Popular</li>
			</ul> :
			<ul>
				<li onClick={(e) => {props.switchListing("airingtoday")}} className={props.active === "airingtoday" ? "active" : null}>Airing Today</li>
				<li onClick={(e) => {props.switchListing("popular")}} className={props.active === "popular" ? "active" : null}>Popular</li>
			</ul>
			}
		</nav>
	)
}

export default SubMenu