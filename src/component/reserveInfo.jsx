import React from "react";
import "./body.css"
import { useEffect, useState } from "react";
import { getReserveDetails } from "../service/bookingService.js"; // Adjust the import based on your project structure
import { formatISODate } from "../utils/timeUtil.js";

function ReserveInfo() {
    const [reserveDetails, setReserveDetails] = useState([]);

    useEffect(() => {
        const fetchReserveDetails = async () => {
            try {
                const data = await getReserveDetails();
                console.log(data);
                
                setReserveDetails(data); // Update the state with reservation details
            } catch (error) {
                console.error("Error fetching reservation details:", error);
            }

        };

        fetchReserveDetails();
    }, []);

    return (
        <div>
            {reserveDetails.length > 0 ? (
                reserveDetails.map((detail, index) => (
                    <div key={index} id="BookingInfoBox">
                        <div id="helpboxstlye3">
                            <p className="helptexthearder">
                                <strong>Room:</strong> {detail.room_name} <br /><br />
                                <strong>Author:</strong> {detail.user_firstname} {detail.user_lastname} <br /><br />
                                <strong>Date:</strong> {formatISODate(detail.booking_date)} <br /><br />
                                <strong>Start time:</strong> {detail.start_time} <br /><br />
                                <strong>End Time:</strong> {detail.end_time} <br /><br />
                                <strong>Purpose of using room:</strong> {detail.booking_title} <br /><br />
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading reservation details...</p>
            )}
        </div>
    );
}

export default ReserveInfo;
