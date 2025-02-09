import React from 'react';
import SearchHead from './SearchHead';
import Header from './Header'
import BookingSuccessful from './bookingsuccess';


const NavBar = () => {
  return (
    <>
      <div className="banners">
        <div className="bannersBG">
          <img src="HelloW4/image 6.png" alt="bannersBG" width="100%" height="auto" />
        </div>
        <div className="filter"></div>
        <Header/>
        <h1 className="NameWeb">
          SIT BOOKING<br />SYSTEM
        </h1>
        <div className="BG-Search-H">
          <SearchHead/>
        </div>

        
        
      </div>
        
    </>
  );
};

export default NavBar;
