import React from 'react'
import { Link } from 'react-router-dom'

const airingtoday = (props) => {

  console.log(props.props)

  let listing

  props.props !== [] ?
  listing = props.props.map((show, i) => {
    return(
      <div key={i} className="content">
        <Link to={"/detail/tv/" + show.id}>
        <p>{show.name}</p>
        <img src={"https://image.tmdb.org/t/p/w150/" + show.poster_path}/>
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

export default airingtoday
