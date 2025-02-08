import React from "react";
import Header from "./Header";
import BookingForm from "./body/bookingform";
import { Link } from "react-router-dom"; // ใช้ useLocation จาก react-router-dom


const Rooms=()=>{
    return(
        <>
            <Header/>
            <div className="section">
                <Link to="/Home">
                    <img src="/HelloW4/Subtract.png" alt="back"/>
                </Link>
                
                <h1>ROOM RESERVATION</h1>
            </div>
            
            <BookingForm/>
        </>
    )
}
export default Rooms