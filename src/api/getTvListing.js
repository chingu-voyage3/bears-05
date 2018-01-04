import axios from "axios"

export const getTvListing = (active) => {
  if(active === "airingtoday") {
    return new Promise(function(resolve, reject) {
      axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=7974b2e242ba6be382cf2078b6afb7c0&language=en-US&page=1`)
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        reject(error)
      })
    })
  } else {
    return new Promise(function(resolve, reject) {
      axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=7974b2e242ba6be382cf2078b6afb7c0&language=en-US&page=1`)
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        reject(error)
      })
    })
  }
}