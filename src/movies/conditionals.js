import React, { Component } from 'react'

// function Conditionals(props){
//   console.log(props)
//   if (props.status =="popular") {
//     return <h1>Popular Shows</h1>
//   }
// return <h1>Airing Today</h1>
// }

function callSwitch(cat){
  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  var today = year+'-'+(month+1)+'-'+day;
  if(month+1 ===12){
    var nextMonth = (year+1)+'-'+1+'-'+28;
  }else{
    nextMonth = year+'-'+(month+2)+'-'+28;
  }

  if(cat ==="now_playing"){
    console.log("now playing")
    return("primary_release_date.gte="+year+'-'+month+'-'+day
    +"&primary_release_date.lte="+today+"&")
  }
  else if(cat ==="coming_soon"){
    console.log("coming soon")
    return("primary_release_date.gte="+today
    +"&primary_release_date.lte="+nextMonth+"&")
  }else {return null}
}
export default callSwitch
