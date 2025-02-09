import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBooking } from '../service/bookingService';  // Adjust the import path
import { Link } from 'react-router-dom';
import './body.css';

function BookingForm() {
    const [formData, setFormData] = useState({
        who: '',
        room: '',
        date: '',
        startTime: '',
        endTime: '',
        purpose: '',
        contactFirstName: '',
        contactLastName: '',
        idNumber: '',
        email: '',
        phone: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            booking_title: formData.purpose,
            booking_date: formData.date,
            start_time: formData.startTime,
            end_time: formData.endTime,
            room_name: formData.room,
            user_firstname: formData.contactFirstName,
            user_lastname: formData.contactLastName,
            user_email: formData.email,
            user_tel: formData.phone,
            user_role: formData.who,
            user_id: formData.idNumber,
            booking_create: new Date().toISOString(),
        };

        console.log('Request Data:', requestData)

        try {
            const response = await createBooking(requestData);  // Using createBooking function from the service

            if (response.success) {
                navigate('/result'); // Redirect on success
            } else {
                alert(response.message);  // Show error message
            }
        } catch (error) {
            console.error("Error during booking:", error);
            alert("There was an error. Please try again.");
        }
    };

    return (
        <div className="Body-Rooms">
            <hr className="solid"></hr> 
            <br />
            {/* Form inputs here */}
            <form onSubmit={handleSubmit}>
                <br />
                <label htmlFor="Who" id="requiredata">Who are you? <span>*</span></label> <br />
                <select name="who" id="Who" className="reservdropdown" onChange={handleChange} required>
                    <option value="4" align="center">Lecturer</option>
                    <option value="2" align="center">Staff</option>
                    <option value="3" align="center">LF</option>
                    <option value="1" align="center">Student</option>

                </select>
                <br /><br />

                <label htmlFor="RoomSelect" id="requiredata">Room Reservation <span>*</span></label><br />
                <select name="room" id="RoomSelect" className="reservdropdown" onChange={handleChange} required>
                <option value="CB2301" align="center">CB2301</option>
                <option value="CB2304" align="center">CB2304</option>
                <option value="CB2305" align="center">CB2305</option>
                <option value="CB2306" align="center">CB2306</option>
                <option value="CB2312" align="center">CB2312</option>
                <option value="CB2313" align="center">CB2313</option>
                <option value="Training room 10/1" align="center">LX10 Training room 10/1</option>
                <option value="Training room 10/2" align="center">LX10 Training room 10/2</option>
                <option value="Training room 10/3" align="center">LX10 Training room 10/3</option>
                <option value="Training room 10/4" align="center">LX10 Training room 10/4</option>
                <option value="Training room 10/5" align="center">LX10 Training room 10/5</option>
                <option value="Training room 11/1" align="center">LX11 Training room 11/1</option>
                <option value="Training room 11/2" align="center">LX11 Training room 11/2</option>
                <option value="Training room 11/3" align="center">LX11 Training room 11/3</option>
                <option value="Training room 11/4" align="center">LX11 Training room 11/4</option>
                <option value="Training room 11/5" align="center">LX11 Training room 11/5</option>
                <option value="Training room 12/1" align="center">LX12 Training room 12/1</option>
                <option value="Training room 12/2" align="center">LX12 Training room 12/2</option>
                <option value="Training 1/3 (Train 3)" align="center">SIT Training 1/3 (Train3)</option>
                <option value="Training 1/5 (Train 5)" align="center">SIT Training 1/5 (Train5)</option>
                <option value="Meeting 3/1 (Meeting 1)" align="center">SIT Meeting 3/1(Meeting 1)</option>
                <option value="Meeting 3/2 (Meeting 2)" align="center">SIT Meeting 3/2 (Meeting 1)</option>
                <option value="Meeting 3/3 (Meeting 3)" align="center">SIT Meeting 3/3 (Meeting 1)</option>
                <option value="Meeting 3/4 (Meeting 4)" align="center">SIT Meeting 3/4 (3rd floor)</option>
                <option value="Meeting 4/2 (Classroom)" align="center">SIT Meeting 4/2 (classroom)</option>
                <option value="Meeting 4/3 (Classroom)" align="center">SIT Meeting 4/3 (4th floor)</option>   
                </select><br /> <br />

                <label htmlFor="SelectDate" id="requiredata">Select date <span>*</span></label><br />
                <input
                    type="text"
                    name="date"
                    className="input-text4"
                    placeholder="YYYY-MM-DD"
                    onChange={handleChange}
                    required
                />

            <br />
            <br />
            <br />

                <div className="requiredata-a">

                    <label htmlFor="StartTime" id="requiredata">Start time <span>*</span><br />
                <select name="startTime" id="StartTime" className="reservdropdown4" onChange={handleChange} required>
                    <option value="">Select Start Time</option>
                    <option value="08:00:00" align="center">8.00</option>
                    <option value="08:30:00" align="center">8.30</option>
                    <option value="09:00:00" align="center">9.00</option>
                    <option value="09:30:00" align="center">9.30</option>
                    <option value="10:00:00" align="center">10.00</option>
                    <option value="10:30:00" align="center">10.30</option>
                    <option value="11:00:00" align="center">11.00</option>
                    <option value="11:30:00" align="center">11.30</option>
                    <option value="12:00:00" align="center">12.00</option>
                    <option value="12:30:00" align="center">12.30</option>
                    <option value="13:00:00" align="center">13.00</option>
                    <option value="13:30:00" align="center">13.30</option>
                    <option value="14:00:00" align="center">14.00</option>
                    <option value="14:30:00" align="center">14.30</option>
                    <option value="15:00:00" align="center">15.00</option>
                    <option value="15:30:00" align="center">15.30</option>
                    <option value="16:00:00" align="center">16.00</option>
                    <option value="16:30:00" align="center">16.30</option>
                    <option value="17:00:00" align="center">17.00</option>
                    <option value="17:30:00" align="center">17.30</option>
                    <option value="18:00:00" align="center">18.00</option>
                    <option value="18:30:00" align="center">18.30</option>
                    <option value="19:00:00" align="center">19.00</option>
                    <option value="19:30:00" align="center">19.30</option>
                    <option value="20:00:00" align="center">20.00</option>
                    <option value="20:30:00" align="center">20.30</option>
                    <option value="21:00:00" align="center">21.00</option>
                    <option value="21:30:00" align="center">21.30</option>
                    <option value="22:00:00" align="center">22.00</option>
                    
                </select></label>

                <label htmlFor="EndTime" id="requiredata">End time <span>*</span><br />
                <select name="endTime" id="EndTime" className="reservdropdown4" onChange={handleChange} required>
                    <option value="">Select End Time</option>
                    <option value="08:30:00" align="center">8.30</option>
                    <option value="09:00:00" align="center">9.00</option>
                    <option value="09:30:00" align="center">9.30</option>
                    <option value="10:00:00" align="center">10.00</option>
                    <option value="10:30:00" align="center">10.30</option>
                    <option value="11:00:00" align="center">11.00</option>
                    <option value="11:30:00" align="center">11.30</option>
                    <option value="12:00:00" align="center">12.00</option>
                    <option value="12:30:00" align="center">12.30</option>
                    <option value="13:00:00" align="center">13.00</option>
                    <option value="13:30:00" align="center">13.30</option> 
                    <option value="14:00:00" align="center">14.00</option>
                    <option value="14:30:00" align="center">14.30</option>
                    <option value="15:00:00" align="center">15.00</option>
                    <option value="15:30:00" align="center">15.30</option>
                    <option value="16:00:00" align="center">16.00</option>
                    <option value="16:30:00" align="center">16.30</option>
                    <option value="17:00:00" align="center">17.00</option>
                    <option value="17:30:00" align="center">17.30</option>
                    <option value="18:00:00" align="center">18.00</option>
                    <option value="18:30:00" align="center">18.30</option>
                    <option value="19:00:00" align="center">19.00</option>
                    <option value="19:30:00" align="center">19.30</option>
                    <option value="20:00:00" align="center">20.00</option>
                    <option value="20:30:00" align="center">20.30</option>
                    <option value="21:00:00" align="center">21.00</option>
                    <option value="21:30:00" align="center">21.30</option>
                    <option value="22:00:00" align="center">22.00</option>
                    
                </select>
                </label>
                </div>
                
                <br /><br />

                <label htmlFor="Purpose" id="requiredata">Purpose of using the room <span>*</span></label><br />
                <textarea name="purpose" id="input2text" onChange={handleChange} required /> <br />

                <label htmlFor="Contact" id="requiredata">Contact Person <span>*</span></label><br />
                <input
                    type="text"
                    name="contactFirstName"
                    id="Contact"
                    className="input-text"
                    placeholder="    First Name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="contactLastName"
                    id="Contact"
                    className="input-text2"
                    placeholder="    Last Name"
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="ID" id="requiredata">ID Number <span>*</span></label><br />
                <input
                    type="text"
                    name="idNumber"
                    id="ID"
                    className="input-text"
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="Email" id="requiredata">E-mail <span>*</span></label><br />
                <input
                    type="text"
                    name="email"
                    id="Email"
                    className="input-text"
                    placeholder="    Ex. myname@ad.sit.kmutt.ac.th"
                    onChange={handleChange}
                    required
                /><br />

                <label htmlFor="Phone" id="requiredata">Phone <span>*</span></label><br />
                <input
                    type="text"
                    name="phone"
                    id="Phone"
                    className="input-text"
                    onChange={handleChange}
                    required
                /><br />
                 <Link to="/Home" className="cancelbutton">cancel</Link>
                <button type="submit" className="submitbutton">Submit</button> <br /><br /><br />

            </form>
            <br />
        </div>
    );
}

export default BookingForm;


