import React, { Component } from 'react'

function Conditionals(props){
  console.log(props)
  if (props.status =="popular") {
    return <h1>Popular Shows</h1>
  }
return <h1>Airing Today</h1>
}

export default Conditionals
