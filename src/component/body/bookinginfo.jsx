import React from "react";
import "./body.css"
import { Link } from "react-router-dom";


function BookingInfo() {
    return (
        <>
        <div>
        <div Id="BookingInfoBox"  >

                <p className="helptexthearder" >BIS606 Digital Infrastructure and Cyber Security System 2/2567</p>
        </div>

            <br />

            <div id="helpboxstlye3">
                <p className="helptexthearder">
                    Description: <br /><br />
                    ผู้สอน: <br /><br />
                    Room: <br /><br />
                    Start time: <br /><br />
                    Duration: <br /><br />
                    Type: <br /><br />
                    Created by:  <br /><br />
                    Modified by: <br /><br />
                    Last updated: <br /><br />
                </p>
            </div>
        </div> <br /><br /><br />

        <div align="center">
            <Link to="/Result" className="editbutton" >Edit</Link>
        </div> <br /><br /><br />

        </>
    ) ;

}

export default BookingInfo;