import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home'
import Footer from './component/footer'
import ViewDay from './component/ViewDay'
import ViewWeek from './component/ViewWeek'
import ViewMonth from './component/ViewMonth'
import Rooms from './component/Rooms'
import Help from './component/Help'
import Report from './component/Report'
import PopUp from './component/PopUp'
import Info from './component/info'
import Result from './component/Result';


const App=()=> {
  

  return (
    <>
      
      <Router>
      <Routes>
        <Route path="/" element={<PopUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/ViewDay" element={<ViewDay />} />
        <Route path="/ViewWeek" element={<ViewWeek />} />
        <Route path="/ViewMonth" element={<ViewMonth />} />

        <Route path="/info" element={<Info />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
      <Footer />
      </Router>

    </>
  )
}


export default App
