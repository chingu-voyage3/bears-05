import axios from "axios"

 /* Example request for Goodfellas
 https://api.themoviedb.org/3/movie/769?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US
 */

export const getMovieDetails = (type, id) => {

    function getBasic() {
      return axios.get(`https://api.themoviedb.org/3/` + type + `/` + id + `?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US`)
    }

    function getCast() {
      return axios.get(`https://api.themoviedb.org/3/` + type + `/` + id + `/credits?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US`)
    }

  return axios.all([getBasic(), getCast()])
  .then(axios.spread(function (basic, cast) {
    return {basic, cast}
  }))
}