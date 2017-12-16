import React from 'react'

const SubMenu = (props) => {
	
	let submenu = props.props.submenu.map((item, i)  => {
		return (
			<li key={i}>{item}</li>
		)
	})

	return(
		<nav className="submenu">
			<ul>
				{submenu}
			</ul>  
		</nav>
	)
}

export default SubMenu