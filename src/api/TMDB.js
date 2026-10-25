import axios from "axios"; 

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const tmdbApi = axios.create({ 
  // Set the base URL to the core API address
  baseURL: 'https://api.themoviedb.org/3/', 
  headers: { 
    Accept: 'application/json', 
    Authorization: `Bearer ${TMDB_TOKEN}`, 
  }, 
}); 

// Changed function name to reflect the actual endpoint being called (Watchlist vs Popular)
export const getWatchlistMovies = async () => { 
  try { 
    // Pass the specific endpoint path and query parameters here
    const response = await tmdbApi.get('/movie/popular'); 
    console.log(response); 
    return response.data.results; 
  } catch (error) { 
    console.log(error); 
    return []; 
  } 
}; 

export const getMovieId= async (moviename) => {
  try{
    const response=await tmdbApi.get(`/search/movie?query=${moviename}`);
    console.log(response);
    return response.data.results[0];
  }catch(err){
    console.log(err);
    return [];
  }
}

//Corrected the image base URL asset path
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w400";
