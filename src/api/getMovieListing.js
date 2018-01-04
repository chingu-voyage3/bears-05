import axios from "axios"

export const getMovieListing = (active) => {
  if(active === "nowplaying") {
    return new Promise(function(resolve, reject) {
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=7974b2e242ba6be382cf2078b6afb7c0&language=en-US&page=1`)
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        reject(error)
      })
    })
  } else if(active === "comingsoon") {
    return new Promise(function(resolve, reject) {
      axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=7974b2e242ba6be382cf2078b6afb7c0&language=en-US&page=1&region=US`)
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        reject(error)
      })
    })
  } else {
    return new Promise(function(resolve, reject) {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7974b2e242ba6be382cf2078b6afb7c0&language=en-US&page=1&region=US`)
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        reject(error)
      })
    })
  }
}