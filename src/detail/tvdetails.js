import React from 'react'
import {Link} from 'react-router-dom'

const TvDetails = (props) => {

  console.log(props)

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

  // let list = null
  // if(props.list !== null) {
  //   list = props.list.data.results.map((item, i) => {
  //     if(item.media_type === "movie") {
  //       return(
  //         <Link to={"/detail/" + item.id} key={i} className="item">
  //           <div className="item__titleLine">
  //             <li>{item.title}</li>
  //             <i className="material-icons">movie</i>
  //           </div>
  //           <p className="item__info">Released: {item.release_date} | {item.vote_average} <i className="material-icons">star</i></p>
  //           <p className="item__overview">{item.overview}</p>
  //         </Link>
  //       )
  //     } else if(item.media_type === "tv") {
  //       return(
  //         <Link to={"/detail/" + item.id} key={i} className="item">
  //           <div className="item__titleLine">
  //             <li key={i}>{item.name}</li>
  //             <i className="material-icons">tv</i>
  //           </div>
  //           <p className="item__info">Released: {item.release_date} | {item.vote_average} <i className="material-icons">star</i></p>
  //           <p className="item__overview">{item.overview}</p>
  //         </Link>
  //       )
  //     } else {
  //       return(
  //         <Link to={"/detail/" + item.id} key={i} className="item">
  //           <div className="item__titleLine">
  //             <li key={i}>{item.name}</li>
  //             <i className="material-icons">person</i>
  //           </div>
  //           <p className="item__info">Released: {item.release_date} | {item.vote_average} <i className="material-icons">star</i></p>
  //           <p className="item__overview">{item.overview}</p>
  //         </Link>
  //       )
  //     }
  //   })
  // }

  function Crew(props){
    if(cast.crew.length >= 1){
      return <div>
        <p className="vitalInfo__producer">{cast.crew[0].job}: {cast.crew[0].name}</p>
        <p className="vitalInfo__director">{cast.crew[1].job}: {cast.crew[1].name}</p>
      </div>
    }
    else return null
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
          <p className="vitalInfo__runtime">{basic.episode_run_time[0]} min</p>
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

export default TvDetails
