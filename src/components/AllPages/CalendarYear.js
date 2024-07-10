import React from "react";
import "./CalendarYear.css";
import Menubar2 from "./Menubar2";
import ScheduleCalendar from "./ScheduleCalendar";
import { useNavigate } from "react-router-dom";
import CalendarMonth from "./CalendarMonth";
import CalendarAllYear from "./CalendarAllYear";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const CalendarYear = () => {
  const daysOfWeek = ["S", "S", "M", "T", "W", "T", "F"];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dates = [
    [28, 29, 30, 31, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  // const Calendar = ({ year }) => {
  //   const calendar = generatecalendar(year);
  // }
  return (
    <>
      <div className="calendar-conatiner">
        <div className="calendarYear grid  grid-cols-3  gap-1 gap-y-0 ">
        <div className=" innercalendar  bg-slate-400 ">
          <h3>January  2021</h3>
          <CalendarAllYear/>
        </div>

        <div className=" innercalendar  bg-slate-400">
          <h3>February  2021</h3>
          <CalendarAllYear/>
        </div>

        <div className=" innercalendar  bg-slate-400">
          <h3>March  2021</h3>
          <CalendarAllYear/>
        </div>

        <div className=" innercalendar  bg-slate-400">
          <h3>April  2021</h3>
          <CalendarAllYear/>
        </div>

        <div className=" innercalendar  bg-slate-400">
          <h3>May  2021</h3>
          <CalendarAllYear/>
        </div>

        <div className=" innercalendar  bg-slate-400">
          <h3>June  2021</h3>
          <CalendarAllYear/>
        </div>

        <div className=" innercalendar  bg-slate-400">
          <h3>July  2021</h3>
          <CalendarAllYear/>
        </div>

        <div className=" innercalendar  bg-slate-400">
          <h3>August  2021</h3>
          <CalendarAllYear/>
        </div>

        <div className=" innercalendar  bg-slate-400">
          <h3>September  2021</h3>
          <CalendarAllYear/>
        </div>

        <div className=" innercalendar  bg-slate-400">
          <h3>October  2021</h3>
          <CalendarAllYear/>
        </div>

        <div className=" innercalendar  bg-slate-400">
          <h3>November  2021</h3>
          <CalendarAllYear/>
        </div>

        <div className=" innercalendar  bg-slate-400">
          <h3>December  2021</h3>
          <CalendarAllYear/>
        </div>

        
        
        
        
        </div>
      
    </div>
          
          
        
      
    </>
  );
};

export default CalendarYear;
