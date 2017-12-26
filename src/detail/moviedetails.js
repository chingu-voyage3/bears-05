import React from 'react'
import {Link} from 'react-router-dom'

const MovieDetails = (props) => {

  let basic = props.props.basic.data
  let cast = props.props.cast.data

  let castProfilePic = cast.cast.map((actor, id) => {
    if(id < 5) {
      return(
        <div key={id} className="castImages__member">
          <img className="castImages__member__pic" src={"https://image.tmdb.org/t/p/w185" + actor.profile_path}/>
          <p className="castImages__member__name">{actor.name}</p>
        </div>
      )
    }
  })

  return(
    <div className="content">
      <h2 className="movieTitle">{basic.title}</h2>
      <div className="imageContainer">
        <img src={"https://image.tmdb.org/t/p/w150/" + basic.poster_path}/>
        <section className="vitalInfo">
          <p className="vitalInfo__ranking">{basic.vote_average}<i className="material-icons">star</i></p>
          <p className="vitalInfo__runtime">{basic.runtime} min</p>
          <p className="vitalInfo__producer">{cast.crew[0].job}: {cast.crew[0].name}</p>
          <p className="vitalInfo__director">{cast.crew[1].job}: {cast.crew[1].name}</p>
          <p className="vitalInfo__cast">Starring: {cast.cast[0].name}, {cast.cast[1].name}, {cast.cast[2].name}, {cast.cast[3].name}</p>
        </section>
      </div>
      <p className="movieOverview">
        {basic.overview}
      </p>
      <div className="castImages">
        {castProfilePic}
      </div>
    </div>
  )
}

export default MovieDetails