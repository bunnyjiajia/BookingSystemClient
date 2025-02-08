import React from "react";
import Header from "./Header";
import ReportForm from "./body/reportform";
import { Link } from "react-router-dom"; // ใช้ useLocation จาก react-router-dom


const Report=()=>{
    return(
        <>
        <Header/>
        <div className="section">
                <Link to="/Home">
                <img src="HelloW4/Subtract.png" alt="back"/>
                </Link>
                <h1>REPORT ON MEETING</h1>
            </div>
        <ReportForm/>
        </>
        
    )
}
export default Report