import http from "./htttp";

const getMovies = () => {
  return http.get("/movies");
};


const getGenres = () =>{
  return http.get("/genres")
}

export default {getMovies, getGenres}