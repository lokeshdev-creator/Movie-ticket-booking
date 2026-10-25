import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function Shows(){
    const [shows,setShows]=useState([]);
    const movieid = useParams();
    useEffect(async()=>{
        const data=await axios(`http://localhost:4000/shows/${movieid}`).then(()=>{
            setShows(data);
            console.log(shows);
        })
    },[movieid]);
    return(
        <div>

        </div>
    );
}