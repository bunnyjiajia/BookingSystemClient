import React from "react";
import "./body.css"
import TableDay from "./TableDay";
import { Link } from "react-router-dom";
import ReserveInfo from "./reserveinfo";

const BookingSuccessful=()=> {
    return (
        <>
        <div className="successfulbox">
            <div className="successfulbox2">
                <img src="/HelloW4/Vector 154 (Stroke).png" alt="iconsuc" />
                <h1 className=" className="theader>
                    You have booked  <br />
                    "Room" !
                </h1>

            </div>
            
        </div>
        <br /><br />
        <ReserveInfo/>
        <br /><br />

    <div align="center">
            <Link to="/Home" className="editbutton">OK</Link>
        </div> <br /><br /><br />
        </>

    ) ;



}

export default BookingSuccessful