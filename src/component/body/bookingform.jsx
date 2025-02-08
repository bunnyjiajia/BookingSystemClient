import React from "react";
import "./body.css"
import { Link } from "react-router-dom";


function BookingForm() {
    return (
        <>
         <div className="Body-Rooms">
            
         <hr className="solid"></hr> 
         <br />
            <label htmlFor="Who" id="requiredata">Who are you? <span>*</span> </label>
            <br />

            <select name="Who" id="Who" className="reservdropdown" required>
                <option value="Lecturer" align="center">Lecturer</option>
                <option value="Staff" align="center">Staff</option>
                <option value="LF" align="center">LF</option>
                <option value="Student" align="center">Student</option>
            </select>

           <br /><br />

            <label htmlFor="RoomSelect" id="requiredata">Room Reservation <span>*</span></label> <br />

            <select name="RoomSlect" id="RoomSlect" className="reservdropdown" required>
            
            
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


        </select><br /><br />
 

  

            <label htmlFor="SelectDate" id="requiredata">Select date <span>*</span> </label> <br />
            <input type="text" className="input-text4" placeholder="DD"/> -
            <input type="text" className="input-text5" placeholder="MM" /> -
            <input type="text" className="input-text5" placeholder="YYYY" /> <br />
            <label id="input-text6">Day</label>
            <label id="input-text7">Month</label>
            <label id="input-text8">Year</label>



            <br />
            <br />
            <br />

            <label htmlFor="StartTime" id="requiredata">Start time <span>*</span></label>
            <label htmlFor="EndTime" id="requiredata2">End Time <span>*</span></label> <br />

            <select name="StartTime" id="StartTime" className="reservdropdown" required>
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
            </select>
            

            <select name="Endtime" id="EndTime" className="reservdropdown2" required>
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
            </select> <br /><br />


            <label htmlFor="Purpose" id="requiredata">Purpose of using the room<span>*</span></label> <br />
            <textarea name="Purpose" id="Purpose" placeholder="  Ex. lecture" className="textareastlye" required ></textarea>
            
        </div>
            <br /><br /><br />

        <hr className="solid"></hr> 

        <br /><br /><br />

        <label htmlFor="Contact" id="requiredata">Contact Person <span>*</span> </label><br />
        <input type="text" name="Contact" id="Contact"className="input-text" placeholder="  First Name"required/>
        <input type="text" name="Contact" id="Contact" className="input-text2" placeholder="  First Name"required/> <br />

        <label htmlFor="ID" id="requiredata">ID Number <span>*</span></label><br />
        <input type="text" name="ID" id="ID"className="input-text"required/> <br />

        <label htmlFor="Email" id="requiredata">E-mail <span>*</span></label><br />
        <input type="text" name="Email" id="Email"className="input-text" placeholder="  Ex. myname@ad.sit.kmutt.ac.th"required/> <br />

        <label htmlFor="Phone" id="requiredata">Phone <span>*</span></label><br />
        <input type="text" name="Phone" id="Phone"className="input-text"required/> <br />

        <Link to="/Home" className="cancelbutton">cancel</Link>
        <Link to="/result" className="submitbutton">submit</Link> <br /><br /><br />
        
        </>
    ) ;
}

export default BookingForm