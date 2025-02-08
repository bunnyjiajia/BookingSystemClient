import React from "react";
import "./body.css"
import TableDay from "./TableDay";




function DailyTable() {
    return (
        <>

        <div>
        
  <select name="stare" id="stare" className="dropdownalign">
     
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
            <option value="Train3" align="center">SIT Training 1/3 (Train3)</option>
            <option value="Train5" align="center">SIT Training 1/5 (Train5)</option>
            <option value="Train3" align="center">SIT Meeting 3/1(Meeting 1)</option>
            <option value="Train5" align="center">SIT Meeting 3/2 (Meeting 1)</option>
            <option value="Train5" align="center">SIT Meeting 3/3 (Meeting 1)</option>
            <option value="Train5" align="center">SIT Meeting 3/4 (3rd floor)</option>
            <option value="Train3" align="center">SIT Meeting 4/2 (classroom)</option>
            <option value="Train5" align="center">SIT Meeting 4/3 (4th floor)</option>

  </select>


        </div>

        <br></br>

        <div>
            <h1 className="theader">STARE-ROOM</h1>
        </div>

        <br />

        <div>
            <div align="center">
            <input type="text" className="input-text4-1" placeholder="DD" /> -
            <input type="text" className="input-text5-1" placeholder="MM" /> -
            <input type="text" className="input-text5-1" placeholder="YYYY" /> <br />
            </div>

            
            <label id="input-text6-1">Day</label>
            <label id="input-text7">Month</label>
            <label id="input-text8">Year</label>

        </div> <br /><br />
        
        <TableDay/>

        <br /><br />

        
        </>
      

        
    );
}

export default DailyTable;