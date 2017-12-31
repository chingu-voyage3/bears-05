import React from 'react'
import {Link} from 'react-router-dom'

const DiscoverPage = (props) => {

  let items
  props.props !== undefined ?
    items = props.props.map((item, i) => {
      if(props.active === "movie") {
        return(
          <Link to={"/detail/movie/" + item.id} className="element" key={i}>
            <img className="element__poster" src={"https://image.tmdb.org/t/p/w150/" + item.poster_path}/>
          </Link>
        )
      } else {
        return(
          <Link to={"/detail/tv/" + item.id} className="element" key={i}>
            <img className="element__poster" src={"https://image.tmdb.org/t/p/w150/" + item.poster_path}/>
          </Link>
        )
      }
    }) :
  null
  
  return(
    <div className="content discovery">

    {items}
    </div>
  )
}

export default DiscoverPage