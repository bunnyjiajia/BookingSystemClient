import React from 'react'
import '../index.css'

const Footer=()=> {
  return (
    <div id="footer">
        <div className="FtTop">
          <div className="FtBox1">
            <img src="HelloW4/SIT logoText.png" alt="logoText" />
            <p>SIT BOOKING SYSTEM</p>
          </div>

          <div className="FtBox2">
            <h4>HELP CENTER</h4><br />
            <p>
              เพื่อให้ฝ่าย Infrastructure สามารถให้บริการการใช้ห้องได้อย่างมีประสิทธิภาพ ขอความกรุณาให้ผู้จองห้อง ทำการจองล่วงหน้า อย่างน้อย 24 ชม. <br /><br />
              หากต้องการใช้ห้องในเวลาที่กระชั้นชิดมากกว่านั้นขอให้ติดต่อ helpdesk โดยตรง
            </p>
          </div>

          <div className="FtBox3">
            <h4></h4><br /><br />
            <p>All room reservation and service request should be made at least 24 hours in advance. If your request is urgent, please contact our helpdesk directly. Please note that if your request or reservation is outside the normal service hours, our staff may not be able to provide the service at the requested time.
            </p>
          </div>

          <div className="FtBox4">
           
            <h4>CONTACT INFO</h4> <br />
            <p>Phone: 0-2470-9820 </p><br />
            <p>Email: servicedesk@sit.kmutt.ac.th</p><br />
            <p>Location: 100 Smart Street, LA, USA</p>
          </div>
        </div>

        <div className="FtButtom">
          <p>Created with love by Group 4 - Hello World 2025 </p>
        </div>
      </div>    
  )
}

export default Footer
