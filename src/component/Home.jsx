import React from "react";
import NavBar from "./NavBar";
import DailyTable from "./dailytable"
import { Link } from "react-router-dom";

/*import PopUp from "./PopUp"; <PopUp/>*/

const Home=()=>{
    return(
        <>
            
            <NavBar/>
    
            <DailyTable/>
            <div>
            <Link to="/Rooms" className="cancelbutton">Reserve</Link>
        </div><br /><br /><br />
            
        </>
    )
}
export default Home