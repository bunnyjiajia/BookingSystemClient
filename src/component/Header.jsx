import React, { useState, useEffect } from 'react';
import { searchRooms} from '../service/roomService.js'; // Assuming correct import path
import { searchBuildings} from '../service/buildingService.js'; // Assuming correct import path
import '../index.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRooms, setFilteredRooms] = useState([]);

  const [filteredBuildings, setFilteredBuildings] = useState([]);


  // Function to handle search term input change
  const handleSearch = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term) {
      try {
        console.log(term);
        
        // Fetch search results from backend
        const rooms = await searchRooms(term);
        // console.log(rooms);
        
        const buildings = await searchBuildings(term);
        console.log(buildings);
        

        // Set the search results
        setFilteredRooms(rooms);
        setFilteredBuildings(buildings);
        
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      // Clear results when search term is empty
      setFilteredRooms([]);
      setFilteredBuildings([]);
    }
  };

  return (
    <>
      <div className="Header">
        <div id="icon">
          <a href="/Home">
            <img src="HelloW4/SIT logo.png" alt="logo" />
          </a>
          <div className="MainHeader">
            <a href="/Home">SIT BOOKING SYSTEM</a>
          </div>
        </div>

        <div className="navbar">
          <a href="/Rooms">ROOMS</a>
          <a href="/Help">HELP</a>
          <a href="/Report">REPORT</a>

          <div className="search">
            <form action="">
              <img src="HelloW4/bx_bx-search.png" alt="search-icon" />
              <input
                type="text"
                placeholder="SEARCH"
                value={searchTerm}
                onChange={handleSearch}
              />
            </form>

            {/* Search Results */}
            {searchTerm && (
              <div className="search-results">
                {filteredRooms.length > 0 && (
                  <div>
                    <h3>Rooms:</h3>
                    {filteredRooms.map((room, index) => (
                      <div key={index} className="search-item">
                        {room.room_name} {/* Adjust based on your response data */}
                      </div>
                    ))}
                  </div>
                )}

                {filteredBuildings.length > 0 && (
                  <div>
                    <h3>Buildings:</h3>
                    {filteredBuildings.map((building, index) => (
                      <div key={index} className="search-item">
                        {building.building_name} {/* Adjust based on your response data */}
                      </div>
                    ))}
                  </div>
                )}

                {filteredRooms.length === 0 && filteredBuildings.length === 0 && (
                  <div className="no-results">No results found</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
