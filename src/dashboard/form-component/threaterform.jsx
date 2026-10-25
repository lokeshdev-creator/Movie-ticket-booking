import React,{ useState } from "react";
import './threater.css'
import axios from "axios";
export default function ThreaterForm(){
     const [formData, setFormData] = useState({
        theaterName: "",
        theaterId: "",
        location: "",
        balconySeatPrice: "",
        middleSeatPrice: "",
        lowerSeatPrice: "",
        balconyRows: "",
        balconySeatsPerRow: "",
        middleRows: "",
        middleSeatsPerRow: "",
        lowerRows: "",
        lowerSeatsPerRow: ""
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

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


        const payload={
        theaterName: formData.theaterName,
        theaterId: formData.theaterId,
        location: formData.location,
        balconySeatPrice: Number(formData.balconySeatPrice),
        middleSeatPrice: Number(formData.middleSeatPrice),
        lowerSeatPrice: Number(formData.lowerSeatPrice),
        balconyLayout: {
            rows: Number(formData.balconyRows),
            seatsPerRow: Number(formData.balconySeatsPerRow)
        },
        middleLayout: {
            rows: Number(formData.middleRows),
            seatsPerRow: Number(formData.middleSeatsPerRow)
        },
        lowerLayout: {
            rows: Number(formData.lowerRows),
            seatsPerRow: Number(formData.lowerSeatsPerRow)
        }
    }
    try{
        const res=await axios.post('http://localhost:4000/dashboard/addthreater',payload);
        console.log(res);
        if(res.status=200 || res.status==201){
            setMessage({type:"success",text:"threatre created successfully!"});  
        }
    }catch(err){
        console.log(err.message);
        setMessage({type:"failed",text:err.message});
    }finally{
        setFormData({
                theaterName: "", theaterId: "", location: "",
                balconySeatPrice: "", middleSeatPrice: "", lowerSeatPrice: "",
                balconyRows: "", balconySeatsPerRow: "",
                middleRows: "", middleSeatsPerRow: "",
                lowerRows: "", lowerSeatsPerRow: ""
            });
           setLoading(false); 
        setMessage({type:"",text:""});
    }

    }

    

    return (
                <div className="form-container">
            <h2 className="form-title">Add New Theatre</h2>
            

            <form onSubmit={handleSubmit} id="form" className="theatre-form">
                
                
                <div className="form-section-block">
                    <h3>Basic Details</h3>
                    <div className="form-grid-3">
                        <div className="input-group">
                            <label>Theater Name</label>
                            <input type="text" name="theaterName" value={formData.theaterName} onChange={handleChange} placeholder="e.g. PVR IMAX" required />
                        </div>
                        <div className="input-group">
                            <label>Theater ID Code</label>
                            <input type="text" name="theaterId" value={formData.theaterId} onChange={handleChange} placeholder="e.g. PVR-NY-01" required />
                        </div>
                        <div className="input-group">
                            <label>Location City</label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. New York, NY" required />
                        </div>
                    </div>
                </div>

                
                <div className="form-section-block">
                    <h3>Seating Layout & Tier Prices</h3>
                    
                    {/* Balcony Row */}
                    <div className="form-grid-3 row-align-center">
                        <div className="input-group"><label>Balcony Ticket Price (\$)</label><input type="number" name="balconySeatPrice" value={formData.balconySeatPrice} onChange={handleChange} placeholder="Price" required /></div>
                        <div className="input-group"><label>Balcony Total Rows</label><input type="number" name="balconyRows" value={formData.balconyRows} onChange={handleChange} placeholder="Rows count" required /></div>
                        <div className="input-group"><label>Seats per Balcony Row</label><input type="number" name="balconySeatsPerRow" value={formData.balconySeatsPerRow} onChange={handleChange} placeholder="Seats per row" required /></div>
                    </div>

                    {/* Middle Row */}
                    <div className="form-grid-3 row-align-center">
                        <div className="input-group"><label>Middle Row Ticket Price (\$)</label><input type="number" name="middleSeatPrice" value={formData.middleSeatPrice} onChange={handleChange} placeholder="Price" required /></div>
                        <div className="input-group"><label>Middle Total Rows</label><input type="number" name="middleRows" value={formData.middleRows} onChange={handleChange} placeholder="Rows count" required /></div>
                        <div className="input-group"><label>Seats per Middle Row</label><input type="number" name="middleSeatsPerRow" value={formData.middleSeatsPerRow} onChange={handleChange} placeholder="Seats per row" required /></div>
                    </div>

                    {/* Lower Row */}
                    <div className="form-grid-3 row-align-center">
                        <div className="input-group"><label>Lower Row Ticket Price (\$)</label><input type="number" name="lowerSeatPrice" value={formData.lowerSeatPrice} onChange={handleChange} placeholder="Price" required /></div>
                        <div className="input-group"><label>Lower Total Rows</label><input type="number" name="lowerRows" value={formData.lowerRows} onChange={handleChange} placeholder="Rows count" required /></div>
                        <div className="input-group"><label>Seats per Lower Row</label><input type="number" name="lowerSeatsPerRow" value={formData.lowerSeatsPerRow} onChange={handleChange} placeholder="Seats per row" required /></div>
                    </div>
                </div>

                
                <div className="form-actions">
                    <button type="submit" className="btn-submit" disabled={loading}>
                        {loading ? "Saving Layout..." : "Save Theatre Layout"}
                    </button>
                </div>
            </form>
        </div>

    )
}