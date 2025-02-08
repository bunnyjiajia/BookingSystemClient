import React from "react";
import Header from "./Header";
import SerchHead from "./SearchHead";
/*import '../index.css'*/

const NavOtPage=()=>{
    return (
        <>
            <Header/>
            <div className="Nav2">
                <div className="BG-SerchHead" >
                    <SerchHead/>
                </div>
            </div>
        </>
    )
}

export default NavOtPage