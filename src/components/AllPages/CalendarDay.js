import React from "react";
import "./CalendarDay.css";

const CalendarDay = () => {
  const events = [
    { time: "09:00 AM", title: " Invited by friends ", color: "#FFA07A", pos: 0 },
    { time: "10:00 AM", title: "", color: "" },
    { time: "11:00 AM", title: "", color: "" },
    { time: "12:00 PM", title: " "+"Prayer Time"+"", color: "#40E0D0", pos: 1 },
    { time: "01:00 PM", title: "", color: "" },
    { time: "02:00 PM", title: "Lunch Time", color: "#FFA07A", pos: 2 },
    { time: "03:00 PM", title: "", color: "" },
    { time: "04:00 PM", title: "", color: "" },
    { time: "05:00 PM", title: "", color: ""},
    { time: "06:00 PM", title: "Prayer Time", color: " #3A974C", pos: 3 },
    { time: "07:00 PM", title: "", color: "" },
    { time: "08:00 PM", title: "Dinner Time", color: "#9370DB", pos: 4 },
    { time: "09:00 PM", title: "", color: "" },
    { time: "10:00 PM", title: "", color: "" },
    { time: "11:00 PM", title: "", color: "" },
    { time: "12:00 AM", title: "", color: "" },
    { time: "01:00 AM", title: "", color: "" },
  ];

  const getPositionStyle = (index) => {
    switch (index) {
      case 0:
        return { position: "relative", top: "0px", left: "10px" };
      case 1:
        return { position: "relative", top: "0px", left: "100px" };
      case 2:
        return { position: "relative", top: "0px", left: "190px" };
      case 3:
        return { position: "relative", top: "0px", left: "50px" };
      case 4:
        return { position: "relative", top: "0px", left: "160px" };
      // Add more cases as needed
      default:
        return {};
    }
  };

  return (
    <>
      <div className="calendarday-conatiner">
        <div className="calendarday-schedule">
          <header>
            <p className="font-bold">December 2, 2021</p>
          </header>

          <div>
            {/* <div style={{ position: "relative", height: "400px" }}> */}
              {events.map((bt, index) => {
                const positionStyle = getPositionStyle(bt.pos);
                return(
                  <div key={index} >
                  <div className=" timetitle-container flex gap-8">
                    <div>
                      <label className="calendartime text-[9px] text-slate-500">{bt.time}</label>
                    </div>
                    <div style={positionStyle}>
                       <label className='calendartitle'>
                            <span className=' span-title text-white rounded-ml font-thin w-24' style={{ backgroundColor: bt.color }} >
                                {bt.title}
                             </span>
                             </label>
                             </div>
                  </div>
                </div>

                );
                ;
              })}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarDay;
