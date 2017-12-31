import React from 'react'

const DiscoverSwitch = (props) => {

  return(
    <ul className="switch">
      <li onClick={(e) => {props.props.method("movie")}} className={props.props.active === "movie" ? "switch__movies active" : "switch__movies"}>Movies</li>
      <li onClick={(e) => {props.props.method("tv")}} className={props.props.active === "tv" ? "switch__tv active" : "switch__tv"}>TV</li>
    </ul>
  )
}

export default DiscoverSwitch