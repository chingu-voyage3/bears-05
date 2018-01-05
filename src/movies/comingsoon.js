import React from 'react'
import { Link } from 'react-router-dom'

const comingsoon = (props) => {

  let listing

  props.props !== [] ?
  listing = props.props.map((movie, i) => {
    return(
      <div key={i} className="content">
        <Link to={"/detail/movie/" + movie.id}>
          <p>{movie.title}</p>
          <img src={"https://image.tmdb.org/t/p/w150/" + movie.poster_path}/>
        </Link>
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

export default comingsoon
