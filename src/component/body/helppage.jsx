import React from "react";
import "./body.css"

function HelpPage() {
    return (
        <>
          <div>
    <div Id="helpboxstlye" >
        <p> <span className="helptexthearder ">About MRBS</span><br />
           <span className="helptexthearder2">SIT Booking System:</span> MRBS 1.5.0 <br />
            Database: MySQL 10.0.38-MariaDB-0ubuntu0.16.04.1 <br />
            System: Linux iapp01x86 4.15.0-1113-azure #126~16.04.1-Ubuntu SMP Tue Apr 13 16:55:24 UTC 2021 x86_64 <br />
            Server time: Mon 03 Feb 2025 15:04:53 +07PHP:7.0.33-0ubuntu0.16.04.16 <br /><br />

            Your browser is set with the following language preference order: en-US, en <br /><br />

            <span  className="helptexthearder " >Help</span> <br />
            Please contact <span className="helptexthearder2" >Software</span> Team for any questions that aren't answered here <br />
        </p>
    </div> <br /><br />

    <div Id="helpboxstlye2">
        <p>
        <span className="helptexthearder2">การเข้าใช้ระบบจองห้อง</span> <br /><br />

        <span className="helptexthearder ">การจองห้อง</span><br />
        <span className="helptexthearder3">-จองวันเดียว (None) <span className="spespan">(เหมาะสำหรับการจองแบบทั่วไป เช่น จองห้องประชุม)</span>  <br />
        -จองรายวัน (Daily) <br />
        -จองรายสัปดาห์ (Weekly) <span className="spespan">(เหมาะสำหรับการจองแบบหลาย ๆ สัปดาห์ หรือทั้งภาคการศึกษา เช่น จองห้องเรียน, ห้องอบรม)</span> <br />
        -จองรายเดือน (Monthly) <br />
        -จองรายปี (Yearly) <br />
        การเลือกประเภทผู้ใช้ห้อง<br />
        แก้ไขข้อมูลการจองห้อง<br />
        ยกเลิกการจองห้อง<br />
        รายงานการจองห้อง<br />
        การค้นหาข้อมูล<br /><br />

        - ล็อกอินเข้าระบบได้อย่างไร? <br />
        - ทำไมไม่สามารถลบหรือเปลี่ยนแปลงรายการจองห้องได้? <br />
        - จองห้องแบบที่มีรายการซ้ำ ๆ กันได้อย่างไร? <br />
        - หากต้องการลบเพียง 1 รายการ จากการจองห้องแบบที่มีรายการจองห้องซ้ำ ๆ จะทำอย่างไร? <br />
        - เกิดอะไรขึ้น ถ้ามีผู้ใช้หลายคนจองห้องในเวลาเดียวกัน? <br />
        - อะไรเป็นความแตกต่างของสีเมื่อทำการจองห้อง? <br />
        - ดูตารางเวลาจองห้องอย่างไร?
        </span>

        </p>
    </div> <br /><br />

    <div id="helpboxstlye3">

        <p>
        <span className="helptexthearder ">ทำไมไม่สามารถลบหรือเปลี่ยนแปลงรายการจองห้องได้</span>?<br /><br />

        ในการลบหรือเปลี่ยนแปลงรายการจองห้องต่าง ๆ คนที่สร้างรายการจองห้องเท่านั้นที่จะมีสิทธิ์ลบหรือเปลี่ยนแปลงรายการจองห้องของตนเอง คุณไม่สามารถเข้าไปลบหรือเปลี่ยนแปลงรายการจองห้องของบุคคลอื่นได้ หากคุณต้องการสับเปลี่ยนหรือเปลี่ยนแปลงรายการจองห้องของบุคคลใดให้คุณทำการติดต่อกับบุคคลนั้น โดยดูที่ Created by ซึ่งเป็น e-mail ของบุคคลที่เป็นผู้จองห้อง หากคุณไม่ทราบว่าบุคคลที่จองห้องเป็นใคร คุณสามารถค้นหาข้อมูลพนักงานคณะฯ ได้ที่
http://intra.it.kmutt.ac.th ในส่วนของ Address Book <br /><br />

        <span className="helptexthearder2">Top</span>
        </p>
    </div><br /><br />

    

    <div id="helpboxstlye4">
        <p>
        <span className="helptexthearder ">หากต้องการลบเพียง 1 รายการ จากการจองห้องแบบที่มีรายการจองห้องซ้ำ ๆ จะทำอย่างไร?</span><br /><br />

        เลือก วัน, ห้อง หรือ เวลา ที่คุณต้องการลบแล้วเลือก Delete Entry. <br /><br />

        <span className="helptexthearder2">Top</span>
        </p>
    </div><br /><br />

    <div Id="helpboxstlye5">
        <p>
        <span className="helptexthearder " >เกิดอะไรขึ้น ถ้ามีผู้ใช้หลายคนจองห้องในเวลาเดียวกัน? </span><br /><br />

        คนที่คลิกปุ่ม Save เพื่อบันทึกรายการจองห้องเป็นคนแรกจะได้ไป โดยระบบสามารถตรวจสอบได้จากเวลา (Timestamp) ในการจองห้อง ซึ่งตามปกติแล้วในแต่ละภาคการศึกษานั้น นักบริการการศึกษาของคณะฯ มีสิทธิ์ ในการจองห้องก่อน เพื่อใช้ในการจัดตารางการเรียนการสอน จากนั้นจึงจะเปิดระบบให้พนักงานอื่น ๆ ได้จองต่อตลอดภาคการศึกษา <br /><br />

        <span className="helptexthearder2">Top</span>
        </p>
    </div><br /><br />

    <div  Id="helpboxstlye" >
        <p> <span className="helptexthearder ">ดูตารางเวลาจองห้องอย่างไร?</span><br /><br />
        
        การดูเวลาในการจองห้องนั้น ในแต่ละช่องคือ 30 นาที เช่น จองห้อง 2 ชม. คือ 8.00-10.00 น. สีที่ Highlight ที่เกิดขึ้นจะครอบคลุม 4 ช่อง ดังรูป<br /><br />

        <span className="helptexthearder2">Top</span>
        </p>
    </div> <br /><br /><br />
  
</div>
        
        </>
    ) ;

}

export default HelpPage