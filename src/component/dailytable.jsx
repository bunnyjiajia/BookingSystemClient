import React, { useEffect, useState } from "react";
import "./body.css";
import TableDay from "./TableDay copy";
import LXTable from "./LXtable";
import SITTable from "./SITtable";

const RenderTable = ( { selectedBuilding}) => {
    switch (selectedBuilding) {
        case "CB2":
            return (
                <>
                    <TableDay/>
                </>
            )
        case "LX":
            return (
                <>
                    <LXTable/>
                </>
            )
        case "SIT":
            return (
                <>
                    <SITTable/>
                </>
            )
        default:
            return <>

            </>
    }
}

function DailyTable() {

  const [calendarTable, setCalendarTable] = useState();
  const [selectedBuilding, setSelectedBuilding] = useState();

  useEffect(() => {
    // setCalendarTable()
    console.log(selectedBuilding);
  }, [selectedBuilding]);

  return (
    <>
      <div>
        <select
          onChange={(e) => setSelectedBuilding(e.target.value)}
          name="stare"
          id="stare"
          className="dropdownalign"
        >
          <option value="CB2" align="center">
            CB2
          </option>
          <option value="LX" align="center">
            LX Building
          </option>
          <option value="SIT" align="center">
            SIT Building
          </option>
        </select>
      </div>
      <br />
      <div>
        <h1 className="theader">STARE-ROOM</h1>
      </div>
      <br />
      <div>
        <div align="center">
          <input type="text" className="input-text4-1" placeholder="DD" /> -
          <input type="text" className="input-text5-1" placeholder="MM" /> -
          <input
            type="text"
            className="input-text5-1"
            placeholder="YYYY"
          />{" "}
          <br />
        </div>

        <label id="input-text6-1">Day</label>
        <label id="input-text7">Month</label>
        <label id="input-text8">Year</label>
      </div>{" "}
      <br />
      <br />
      <RenderTable selectedBuilding={selectedBuilding}  />
      <br />
      <br />
    </>
  );
}

export default DailyTable;
