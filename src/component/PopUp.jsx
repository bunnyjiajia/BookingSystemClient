import React, { useState, useEffect } from "react";
import './PopUp.css'; 
import Home from "./Home";

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="PopUp">
          <h1>ประกาศ</h1>
          <br />
          <p>
            คณะเทคโนโลยีสารสนเทศ
            <br />
            ข้อปฏิบัติสำหรับผู้มีสิทธิ์จองห้องเรียนและห้องอบรมคอมพิวแตอร์
            <br />
            -------------------------------
            <br />
            <br />
            การจองห้องเรียนหรือห้องอบรมคอมพิวเตอร์ อาจารย์ผู้สอน,
            ผู้ช่วยสอนหรือเจ้าหน้าที่ที่มีสิทธิ์จองห้องเป็นผู้รับผิดชอบและดูแล
            ความเรียบร้อยหลังเสร็จสิ้นการใช้งานทุกครั้ง ทั้งนี้ หากคณะฯตรวจสอบ
            แล้วพบอุปกรณ์การเรียนการสอนในห้องเกิดความเสียหาย หรือไม่มีการ
            ปิดไฟ, ปิดแอร์ หลังจากการใช้งาน คณะฯถือเป็นความบกพร่องในการ
            ปฏิบัติงานของผู้จอง และผู้จองอาจต้องชดใช้ค่าเสียหาย
          </p>
          <div className="from">
            <br />
            ทั้งนี้ ตั้งแต่วันที่ 28 ตุลาคม พ.ศ. 2548
            <br />
            <br />
            ประกาศ ณ วันที่ 28 ตุลาคม พ.ศ. 2548
            <br />
            <br />
            คณะเทคโนโลยีสารสนเทศ
          </div>

          <div className="conser">
            <a className="no" href="/">
              ปฏิเสธ
            </a>
            <button id="close" onClick={closePopup}>
                <a className="yes">ยอมรับ</a>
            </button>
            
          </div>
        </div>
        
      )}<Home/>
    </>
  );
};

export default PopUp;


