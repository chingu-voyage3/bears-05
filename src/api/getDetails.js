import axios from "axios"

 /* Example request for Goodfellas
 https://api.themoviedb.org/3/movie/769?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US
 */

export const getDetails = (id) => {

  return new Promise(function(resolve, reject) {
  axios.get(`https://api.themoviedb.org/3/movie/` + id + `?api_key=03b9a40695aae1f4e99a42e90e012e9e&language=en-US`)
    .then(function(response) {
      resolve(response)
    })
    .catch(function(error) {
      reject(error)
    })
  })


}