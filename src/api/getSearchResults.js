import axios from "axios"

export const getSearchResults = (query) => {

  return new Promise(function(resolve, reject) {
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=7974b2e242ba6be382cf2078b6afb7c0&language=en-US&query=`+ query + `&page=1&include_adult=false`)
    .then(function(response) {
      resolve(response)
    })
    .catch(function(error) {
      reject(error)
    })
  })

  // axios.get(`https://api.themoviedb.org/3/search/multi?api_key=7974b2e242ba6be382cf2078b6afb7c0&language=en-US&query=`+ query + `&page=1&include_adult=false`)
  // .then(res => {
  //   const results = res.data.results.map(obj => ({title: obj.title, overview: obj.overview, poster: obj.poster_path, vote: obj.vote_average}));
  //   return results
  // });
}