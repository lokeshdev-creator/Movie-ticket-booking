import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import { getWatchlistMovies,IMAGE_BASE_URL } from "./api/TMDB";


function Movie(){
    const [movies,setMovies]=useState([]);
useEffect(()=>{
    const fetchMovies=async()=>{
        const res= await getWatchlistMovies();
        setMovies(res);
    }

    fetchMovies()//fetch a movies data from the database
},[]);
    return ( 
    <><h1 style={{ textAlign: 'center', margin: '2rem' }}>Popular Movies</h1>
        <div className="col Movie"
        style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: "20px", 
        justifyContent: "center", // Optional: centers the cards on the screen
        padding: "20px"
    }}
        >
            {
                movies?.map((movie)=>{
                return(
                        <section className="card" style={{maxWidth: "320px"}} key={movie.id}>
                        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} className="card-img-top" alt={movie.original_title}/>
                        <div className="card-body">
                            <h4 className="card-title">{movie.original_title}</h4>
                            <p>{movie.release_date}</p>
                            <a href={`/id/book/${movie.id}`} className="btn-solid btn " style={{backgroundColor:"green",color:"whitesmoke",}}>Book show</a>
                        </div>
                    </section>
                    );
                })
                }
        </div>
        </>
    )
}

export default Movie