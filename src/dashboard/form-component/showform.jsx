import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { getMovieId } from '../../api/TMDB';

export default function ShowForm(){
    const [theatres,setTheatres] = useState([]);
    const [formData,setFormData] = useState({
        movieName:"",
        showdate:"",
        showtime:"",
        threaterName:"",
        threaterId:""
    })
     const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    useEffect(()=>{
        //fetch the threater of a particular admin;
    },[]);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage({type:"",text:""});
        try{
           const movieid=await getMovieId(formData.movieName);
        console.log("movieid",movieid);
        const payload={
            MovieId:movieid.id,
            showdate:formData.showdate,
            showtime:formData.showtime,
            threaterName:formData.threaterName,
            threaterId:formData.threaterId || "PVR_NR_01"
        };
        const res=await axios.post('http://localhost:4000/addshow',payload);
        console.log(res.data);
        if(res.status=200 || res.status==201){
            setMessage({type:"success",text:"Show created successfully!"});  
        } 
        }catch(err){
        setMessage({type:"failed",text:err.message});
        }finally{
            setFormData({
                movieName:"",
                showdate:"",
                showtime:"",
                threaterName:"",
                threaterId:""
            })
            setLoading(false); 
        }
        setTimeout(() => {
            setMessage({type:"",text:""});
        }, 1000);
        


    }


    return (
        <div className="form-container">
            <h2 className="form-title">Add New Show</h2>
            
            {message.text && (
                <div className={`form-alert ${message.type}`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit} className="theatre-form">
                
                <div className="form-section-block">
                    <h3>Show Details</h3>
                    <div className="form-grid-2">
                        <div className="input-group">
                            <label>Movie Name</label>
                            <input 
                                type="text" 
                                name="movieName" 
                                value={formData.movieName} 
                                onChange={handleChange} 
                                placeholder="e.g. Spider-Man" 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Threater Name</label>
                            <input 
                                type="text" 
                                name="threaterName" 
                                value={formData.threaterName} 
                                onChange={handleChange} 
                                placeholder="e.g. Velocity cinema" 
                                required 
                            />
                        </div>
                        {/* <div className="input-group">
                            <label>Select Theatre ID</label>
                            <select 
                                name="theaterId" 
                                value={formData.threaterId} 
                                onChange={handleChange} 
                                required
                            >
                                <option value="">-- Choose Admin Theatre --</option>
                                {theatres.map((t) => (
                                    <option key={t._id} value={t._id}>
                                        {t.theaterName} ({t.theaterId})
                                    </option>
                                ))}
                            </select>
                        </div> */}
                    </div>

                    <div className="form-grid-2" style={{ marginTop: "20px" }}>
                        <div className="input-group">
                            <label>Show date</label>
                            <input 
                                type="date" 
                                name="showdate" 
                                value={formData.showdate} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Show time</label>
                            <input 
                                type="text" 
                                name="showtime" 
                                value={formData.showtime} 
                                onChange={handleChange} 
                                placeholder="e.g. 03:30 PM" 
                                required 
                            />
                        </div>
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn-submit" disabled={loading}>
                        {loading ? "Saving Show..." : "Save Show Layout"}
                    </button>
                </div>
            </form>
        </div>
    )
}