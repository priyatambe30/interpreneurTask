import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Schedule.css";
import ScheduleCalendar from "./ScheduleCalendar";
import ScheduleTaskPreview from "./ScheduleTaskPreview";
import { useNavigate } from "react-router-dom";
import Menubar2 from "./Menubar2";





const Schedule = () => {
  const [date, setDate] = useState(new Date());

  const navigate= useNavigate();
  
  
  const handleButtonClick = () => {
    navigate('/ScheduleTaskPreview')
  };


  const onChange = (newDate) => {
    setDate(newDate);
  };


  const events = [
    { date: '12 Dec, 2021', time: '11.45AM', location: 'Office Meeting' },
    { date: '10 Dec, 2021', time: '11.45AM', location: 'Home' },
    { date: '09 Dec, 2021', time: '11.45AM', location: 'Friends Zone' },
    { date: '08 Dec, 2021', time: '12.15PM', location: 'Office Meeting' },
    { date: '07 Dec, 2021', time: '01.20PM', location: 'Home' },
    { date: '05 Dec, 2021', time: '10.15AM', location: 'Meeting Outside' },
    { date: '04 Dec, 2021', time: '11.15AM', location: 'Office Meeting' },
    { date: '04 Dec, 2021', time: '01.25PM', location: 'Home' },
    { date: '02 Dec, 2021', time: '10.15AM', location: 'Friends' },
    { date: '01 Dec, 2021', time: '04.30PM', location: 'Meeting Outside' }
  ];

 



  return (
    <>
      <div className="flex">
        <div><Menubar2/></div>

      <div className="schedule-container1 flex">
      <div className=" flex">
        <p className=" w-32">Schedule List</p>
       <div> <button className="addnewbtn font-thin text-white" onClick={handleButtonClick}>+Add New</button>
       {/* {schedule && <ScheduleTaskPreview/>} */}
       </div>
      </div>
        {/* left side schedule container */}
        <div className="left-schedule-container">
          <div className="schedule-box">
            <div>
              <button className="createschedulebtn font-thin text-white">
                +Create Schedule
              </button>
            </div>

            <div>
              <button className="myschedulebtn font-thin text-white">
                My Schedule
              </button>
            </div>

            <div className="calendar-container">
              <ScheduleCalendar />
            </div>

            <div>
              <p>People</p>
              <div className="searchbtnschedule flex">
                <button type="submit" className=" bg-slate-100">
                  {" "}
                  <i className="fa fa-search"></i>
                </button>
                <input
                  type="text"
                  placeholder="search.."
                  className="searchtextschedule font-thin rounded-full  "
                ></input>

                <div className="flex grid gap-2 font-thin  ">
                  <div className="left-chatting-list1 grid flex border-solid border-2 border-slate-200">
                    <ul
                      role="list"
                      className="p-2 divide-y divide-slate-200 gap-8"
                    >
                      <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0 ">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="./images/image4.png"
                        ></img>

                        <div>
                          <a className="text-[12px] text-left">
                            {" "}
                            Eddie Lobanovskiy
                          </a>
                          <p className="text-[9px] text-left">
                            laboanovskiy@gmail.com
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="left-chatting-list1 grid flex border-solid border-2 border-slate-200">
                    <ul
                      role="list"
                      className="p-2 divide-y divide-slate-200 gap-4"
                    >
                      <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0 ">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="./images/image5.png"
                        ></img>

                        <div>
                          <a className="text-[12px] text-left"> Alexey Stave</a>
                          <p className="text-[9px] text-left">
                            alexeyst@gmail.com{" "}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="left-chatting-list1 grid flex border-solid border-2 border-slate-200">
                    <ul
                      role="list"
                      className="p-2 divide-y divide-slate-200 gap-4"
                    >
                      <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0 ">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="./images/image7.png"
                        ></img>

                        <div>
                          <a className="text-[12px] text-left">
                            {" "}
                            Anton Tkacheve
                          </a>
                          <p className="text-[9px] text-left">
                            tkacheveanton@gmail.com
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





        {/* right side schedule container */}
        <div className="right-schedule-container">
          {/* body Dropdownlist */}

          <div className="right-schedule">
            

            <div className="dropdown-data1 flex  text-[13px] grid grid-cols-7  text-left gap-2">
            
             
            
              <div className="schedule-dropdown col-span-1 flex">
              <input type="checkbox" className=""></input>
                <button className="dropbtn1 text-[13px] pl-8  ">
                  Date
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content text-[10px] hover:bg-sky-600 text-sky-400">
                  <a href="#" className="divide-y "> 1 </a>
                  <a href="#"> 2</a>
                </div>
              </div>

              <div className="schedule-dropdown col-span-2 text-center flex">
                <button className="dropbtn1 text-[13px]  ">
                  Time
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content text-[10px] hover:bg-sky-600 text-sky-400">
                  <a href="#">1</a>
                  <a href="#">2</a>
                </div>
              </div>

              <div className="schedule-dropdown col-span-3 flex">
                <button className="dropbtn2 text-[13px] text-right pr-24">
                  Location
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content items-center text-[10px] hover:bg-sky-600 text-sky-400">
                  <a href="#"> 1</a>
                  <a href="#"> 2</a>
                </div>
              </div>

              {/* <div>
            <img src='./images/DeleteData.png'>
            </img>
          </div> */}
            </div>
          </div>


          <div className=" table-data grid gap-6 cols-7 text-center font-thin text-[10px] ">
            {/* <table className="w-auto">
              <tr className=" flex ">
                <td className="table-data flex grid content-evenly gap-4">
                {events.map((event, index) => (
                    <tr key={index}>
                        <td><input type="checkbox" /></td>
                        <td className="">{event.date}</td>
                        <td>{event.time}</td>
                        <td>{event.location}</td>
                        
                        <td><button className="edit-btn"><img src="./images/Edit.png"></img>
                        <img className="w-6 h-6" src="./images/Editbg.png"></img></button></td>
                        <td><button className="delete-btn"><img src="./images/Delete.png"></img>
                        <img className="w-6 h-6" src="./images/Deletebg.png"></img></button></td>
                    </tr>
                ))}
                </td>
              </tr>
            </table> */}
                  {events.map((events, index) => (
                 <div className="flex  gap-16  cols-7 border border-1-solid pt-3 hover:bg-slate-200 hover:text-sky-600 cursor-pointer">
                  <label key={index}></label>

                 <div className="pt-2"> <input type="checkbox"  ></input> </div>

                 
                 <div className="flex pt-2"><img className="w-3 h-3" src="./images/Calendar (2).png">
                 </img><label className=" pl-2"> {events.date}</label></div>

                 
                 <div className="flex pt-2"><img className="w-3 h-3" src="./images/Time Circle.png"></img>
                 <label className=" pl-2">{events.time}</label></div>

                 
                 <div className="flex col-span-2 pl-6 text-center bg-sky-100 text-blue-700 w-48 h-8 rounded-full pt-2  gap-2">
                  <img className="w-3 h-3" src="./images/Location(2).png"></img>
                 <label className="">{events.location}</label></div>

                 <div><button className=""><img className="w-8 h-8" src="./images/Editbg.png"></img>
                 <img className="edit-btn w-3 h-3" src="./images/Edit.png"></img>
                 </button></div>

                 <div><button className=""><img className="w-8 h-8" src="./images/Deletebg.png"></img>
                 <img className="dlt-btn w-3 h-3" src="./images/Delete.png"></img>
                 </button></div>
                 </div>


))}

          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Schedule;
