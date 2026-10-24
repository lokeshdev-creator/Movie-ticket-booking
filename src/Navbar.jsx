import React from "react";
import { useState} from "react";
import { Outlet } from "react-router-dom";
import './index.css'
function Navbar(){
  const [Role,setRole]=useState("admin");
    return(
      <nav className="row mt-3">
        <div className="col-2 logo">
          <h2>IMovies</h2>
            
        </div>
        <div className="col-9 nav-bar">
            <ul>
           <a href="/"><li>Home</li></a>
           <a href="#"> <li>Genres</li></a>
           <a href="/movies"><li>Movies</li></a>
            {Role=='admin'?<a href="/dashboard"><li>dashboard</li></a>:<></>}
            </ul>
            <form>
            <input className="form-control" type="search" placeholder="Search a movie,threater & location" aria-label="Search"/>
            <div>
<button className="btn" type="submit">Search</button>
            </div>
            <div>
<button className="btn">Sign Up</button>
            </div>
          
          </form>
        </div>
        <Outlet/>
      </nav>
    )
}
export default Navbar;