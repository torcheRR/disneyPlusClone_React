import axios from "axios";
const api = "dd815eda4088e8ccd7e32a8ced638885";
const movieBaseURL = "https://api.themoviedb.org/3/";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=dd815eda4088e8ccd7e32a8ced638885";

const getTrendingVideos = axios.get(
  movieBaseURL + "trending/all/day?api_key=" + api
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default { getTrendingVideos,getMovieByGenreId };
