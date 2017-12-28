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
  function Crew(props){
    if(cast.crew.length >=1){  //confirms crew credits exist
      return cast.crew.map((member, i)=>{
        if (i < 3){           //controls number of crew credits displayed
          return (
            <p className="vitalInfo__crew">{member.job}: {member.name}</p>
          )
        }
      })
    }
    else {return null}
  }

  function Cast(props){
    if(cast.cast.length >=1){  //confirms cast credits exist
      var castArr = []
      cast.cast.map((member, i)=>{
        if (i < 5){           //controls number of cast credits displayed
          castArr.push(member.name)
        }
      })
      return (<p>Starring: {castArr.join(', ')}</p>)
    }
    else {return null}
  }

  return(
    <div className="content">
      <h2 className="movieTitle">{basic.title}</h2>
      <div className="imageContainer">
        <img src={"https://image.tmdb.org/t/p/w150/" + basic.poster_path}/>
        <section className="vitalInfo">
          <p className="vitalInfo__ranking">{basic.vote_average}<i className="material-icons">star</i></p>
          <p className="vitalInfo__runtime">{basic.runtime} min</p>
          <Crew/>
          <Cast/>
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
