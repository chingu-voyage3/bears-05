import axios from "axios"

export const getDiscovery = (type = "movie", year = new Date().getFullYear(), sortby = "popularity.desc", genre = "") => {
  console.log(type + ", " + year + ", " + sortby + ", " + genre)
  return new Promise(function(resolve, reject) {
    
    let number = genre.toString()
    let Genre = number !== "" ? "&with_genres=" + number : ""
    let url
    type === "movie" ?
    url = "https://api.themoviedb.org/3/discover/movie?api_key=7974b2e242ba6be382cf2078b6afb7c0&language=en-US&sort_by=" + sortby + "&page=1&include_adult=false&primary_release_year=" + year + Genre :
    url = "https://api.themoviedb.org/3/discover/tv?api_key=7974b2e242ba6be382cf2078b6afb7c0&language=en-US&sort_by=" + sortby + "&page=1&include_adult=false&first_air_date_year=" + year + Genre 

    axios.get(url)
    .then(function(response) {
      resolve(response)
    })
    .catch(function(error) {
      reject(error)
    })
  })
}
