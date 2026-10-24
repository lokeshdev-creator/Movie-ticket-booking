import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function ShowForm(){
    const [theatres,setTheatres] = useState([]);
    const [formData,setFormData] = useState({
        movieName:"",
        threaterId:"",
        date:"",
        time:"",
        threaterName:"",
        theaterId:""
    })
     const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    useEffect(()=>{
        //fetch the treat of a particuar admin;
    },[]);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit=async(e)=>{
        e.preventDeafult();
        setLoading(true);
        setMessage({type:"",text:""});
        const payload={
            movieName:formData.movieName,
            date:formData.date,
            time:formData.time,
            threaterName:formData.threaterName,
            threaterId:formData.threaterId
        };



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
                                name="Threat" 
                                value={formData.threaterName} 
                                onChange={handleChange} 
                                placeholder="e.g. Velocity cinema" 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Select Theatre ID</label>
                            <select 
                                name="theaterId" 
                                value={formData.theaterId} 
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
                        </div>
                    </div>

                    <div className="form-grid-2" style={{ marginTop: "20px" }}>
                        <div className="input-group">
                            <label>Show Date</label>
                            <input 
                                type="date" 
                                name="date" 
                                value={formData.date} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Show Time</label>
                            <input 
                                type="text" 
                                name="time" 
                                value={formData.time} 
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