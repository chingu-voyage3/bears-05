import React from 'react'
import { Link } from 'react-router-dom'

const nowplaying = (props) => {

  console.log(props.props)

  let listing

  props.props !== [] ?
  listing = props.props.map((movie, i) => {
    return(
      <div key={i} className="content">
        <p>{movie.title}</p>
        <img src={"https://image.tmdb.org/t/p/w150/" + movie.poster_path}/>
      </div>
    )
  }) :
  null

  return(
    <div>
      {listing}
    </div>
  )

}

export default nowplaying