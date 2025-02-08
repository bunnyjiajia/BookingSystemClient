import React, { useState } from 'react';
import '../index.css';

const Header = () => {
  // สร้าง state สำหรับเก็บคำค้นหาและผลลัพธ์ที่กรอง
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  // ข้อมูลที่เราจะใช้ในการค้นหา
  const data = [
    "Rooms",
    "Help",
    "Home",
    "Report",
    "ViewDay",
    "ViewMonth",
    "ViewWeek",
    "Subjects"
  ];

  // ฟังก์ชันค้นหาที่จะทำการกรองข้อมูล
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // คัดกรองข้อมูลตามคำค้นหาที่พิมพ์
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredResults(filtered);
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

            {/* ผลลัพธ์การค้นหา */}
            {searchTerm && (
              <div className="search-results">
                {filteredResults.length > 0 ? (
                  filteredResults.map((result, index) => (
                    <div key={index} className="search-item">
                      {result}
                    </div>
                  ))
                ) : (
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
