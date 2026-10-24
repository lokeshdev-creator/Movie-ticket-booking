import React from "react";
import { Link, Outlet} from "react-router-dom";

function DashBoard(){
    return (
        <div className="row dashboard-container" style={{ display: 'flex' }}>
            <div className="col-3 side-bar">
                <ul>
                    <li><Link to="Addthreater">Add Threater</Link></li>
                    <li><Link to="Addshows">Add Shows</Link></li>
                    <li><Link to="bookings">Bookings</Link></li>
                    <li><Link to="bookings">view</Link></li>
                </ul>
            </div>
            <div className=" col-8 form-section">
                <Outlet/>
            </div>
        </div>
    );
}

export default DashBoard;