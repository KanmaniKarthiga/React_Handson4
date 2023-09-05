import React from "react";
import { Link } from "react-router-dom";

function LinkCompo(){
    return(
        <div className="navbar">
            <Link to='/' className="link">Home</Link>
            <Link to='/student' className="link">Students</Link>
            <Link to='/contact' className="link">Contact US</Link>
        </div>
    )
}
export default LinkCompo;