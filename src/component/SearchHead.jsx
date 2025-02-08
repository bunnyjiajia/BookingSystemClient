import React from "react";
import { Link, useLocation } from "react-router-dom";

const SearchHead = () => {
    
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="SearchHeaders">
        <h2>FIND</h2>
        <div className={`action ${isActive("/Rooms") ? "clicked" : ""}`}>
          <Link to="/Rooms">Rooms</Link>
        </div>
        <div className={`action ${isActive("/ViewDay") ? "clicked" : ""}`}>
          <Link to="/ViewDay">View Day</Link>
        </div>
        <div className={`action ${isActive("/ViewWeek") ? "clicked" : ""}`}>
          <Link to="/ViewWeek">View Week</Link>
        </div>
        <div className={`action ${isActive("/ViewMonth") ? "clicked" : ""}`}>
          <Link to="/ViewMonth">View Month</Link>
        </div>
      </nav>

      <Link to="/Rooms">
        <div className="SearchBar">
          <div className="box1">
            <div className="SearchBarp1">Room</div>
            <div className="SearchBarp2">Which city do you prefer?</div>
          </div>
          <div className="box2">
            <div className="SearchBarp1">Start time</div>
            <div className="SearchBarp2">Add Dates</div>
          </div>
          <div className="box3">
            <div className="SearchBarp1">End time</div>
            <div className="SearchBarp2">Add Dates</div>
          </div>
          <div className="box4">
            <img src="/HelloW4/fe_search.png" alt="search" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default SearchHead;
