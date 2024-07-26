import React from "react";
import "./Calendar.css";
import { useNavigate } from "react-router-dom";
import Menubar2 from "./Menubar2";

const Calendar = () => {
  const navigate= useNavigate();
  const navigatetolist = () => {
    navigate('/calendar')
  };
  const navigatetoBoard = () => {
    navigate('/settings')
  };
  const navigatetotimeline = () => {
    navigate('/ScheduleTaskPreview')
  };

  const handleclick =()=>{
    navigate('/calendar-combine')
  }
  // const handleclick =()=>{
  //   navigate('/calendar-combine')
  // }
  return (
    <>
    <div className="flex"><div><Menubar2/></div>
    <div className="main-container flex">
    
      <div className="header-container1 flex ">
        <p className="font-bold">Task Preview</p>
        <button className="taskbtn font-thin" onClick={handleclick}>+Add Task</button>
      </div>

      <div className="subheader-container1 flex font-thin text-[10px] gap-2 ">
        <div className="font-thin flex gap-6 text-[12px] ">

        
        <div className='schedule-subheader-container-btnss font-thin flex gap-2  '>
        <button className='border-1 gap-8 w-16 hover:bg-sky-400 border-2 hover:text-white' onClick={navigatetolist}>List</button>
        <button className='border-1 gap-8 w-16 hover:bg-sky-400 border-2 hover:text-white 'onClick={navigatetoBoard}>Board</button>
        <button className='border-1 gap-8 w-20 hover:bg-sky-400 border-2 hover:text-white' onClick={navigatetotimeline}>Timeline</button>
        </div>
        




          {/* <button className="border-2  w-10 hover:bg-sky-400 
           active:bg-sky-500 focus-ring focus:ring-sky-300 border-1" onClick={navigatetolist}>
            List
          </button>
          <button className="border-1 gap-8 w-10 hover:bg-sky-400  " onClick={navigatetoBoard}>
            Board
          </button>
          <button className="border-1 gap-8 w-10 hover:bg-sky-400"onClick={navigatetotimeline}>
            Timeline
          </button> */}
        </div>

        <div className="searchbox  text-[12px]">
          <input
            type="text"
            placeholder="search..."
            className="rounded-lg font-thin h-8"
          ></input>
          <button type="submit" className="searchbtncalendar">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>

      <div className="flex w-full">
        {/* To Do container */}
        <div className="left-container1 flex flex-col gap-2 w-full">
          <div className=" list-container4  ">
            <div className="flex">
              <p className="list-para">To Do</p>
              <button className="seemorebtn text-blue-500 font-thin text-[12px] hover:text-blue-800">
                See More
              </button>
            </div>

            <div className="table-container">
              <table className="gap-4 font-thin text-[12px]">
                <tr className="hover:bg-blue-200 hover:text-blue-600">
                  <th>Check Box</th>
                  <th>Task Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Member</th>
                  <th>Status </th>
                  <th>Action</th>
                </tr>

                <tr className="hover:bg-blue-200 hover:text-blue-600">
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td className="flex gap-3">
                    <img className="w-5 h-5" src="./images/Ellipse 104.png"></img>
                    <span className="text-blue-500 font-thin text-[12px]">
                      Ui Design
                    </span>
                  </td>
                  <td>03/12/2021</td>
                  <td className="text-red-500">5/12/2021</td>
                  <td>5 Member</td>
                  <td className=" text-white ">
                    <label className="pendinglbl h-10 ">Pending</label>
                  </td>
                  <td className=" actionbtn flex gap-6 ">
                    <img className="actionbtn1" src="./images/Edit.png"></img>
                    <img className="actionbtn2" src="./images/Delete.png"></img>
                  </td>
                </tr>

                <tr className="hover:bg-blue-200 hover:text-blue-600">
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td className="flex gap-3 ">
                    <img className="w-5 h-5" src="./images/Group 531.png"></img>
                    <span className="text-blue-500 font-thin text-[12px]">
                      Logo Design
                    </span>
                  </td>
                  <td>03/12/2021</td>
                  <td className="text-red-500">5/12/2021</td>
                  <td>5 Member</td>
                  <td className=" text-white ">
                    <label className="pendinglbl h-10 ">Pending</label>
                  </td>
                  <td className=" actionbtn flex gap-6 ">
                    <img className="actionbtn1" src="./images/Edit.png"></img>
                    <img className="actionbtn2" src="./images/Delete.png"></img>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          {/* Doing container */}
          <div className=" list-container4">
            <div className="flex">
              <p className="list-para">Doing</p>
              <button className="seemorebtn text-blue-500 font-thin text-[12px] hover:text-blue-800">
                See More
              </button>
            </div>

            <div className="table-container">
              <table className="gap-4 font-thin text-[12px]">
                <tr className="hover:bg-blue-200 hover:text-blue-600">
                  <th>Check Box</th>
                  <th>Task Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Member</th>
                  <th>Status </th>
                  <th>Action</th>
                </tr>

                <tr className="hover:bg-blue-200 hover:text-blue-600">
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td className="flex gap-0 ">
                    <img className="w-5 h-5" src="./images/Ellipse(2).png"></img>
                    <span className="text-blue-500 font-thin text-[12px]">
                      Graphic Design
                    </span>
                  </td>
                  <td>03/12/2021</td>
                  <td className="text-red-500">5/12/2021</td>
                  <td>5 Member</td>
                  <td className=" text-white ">
                    <label className="runninglbl h-10 ">Running</label>
                  </td>
                  <td className=" actionbtn flex gap-6 ">
                    <img className="actionbtn1" src="./images/Edit.png"></img>
                    <img className="actionbtn2" src="./images/Delete.png"></img>
                  </td>
                </tr>

                <tr className="hover:bg-blue-200 hover:text-blue-600">
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td className="flex gap-3 ">
                    <img className="w-5 h-5" src="./images/Ellipse 105.png"></img>
                    <span className="text-blue-500 font-thin text-[12px]">
                      Web Design
                    </span>
                  </td>
                  <td>03/12/2021</td>
                  <td className="text-red-500">5/12/2021</td>
                  <td>5 Member</td>
                  <td className=" text-white ">
                    <label className="runninglbl h-10 ">Running</label>
                  </td>
                  <td className=" actionbtn flex gap-6 ">
                    <img className="actionbtn1" src="./images/Edit.png"></img>
                    <img className="actionbtn2" src="./images/Delete.png"></img>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          {/* Done container */}
          <div className=" list-container4">
            <div className="flex">
              <p className="list-para">Done</p>
              <button className="seemorebtn text-blue-500 font-thin text-[12px] hover:text-blue-800">
                See More
              </button>
            </div>

            <div className="table-container">
              <table className="gap-4 font-thin text-[12px]">
                <tr className="hover:bg-blue-200 hover:text-blue-600">
                  <th>Check Box</th>
                  <th>Task Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Member</th>
                  <th>Status </th>
                  <th>Action</th>
                </tr>

                <tr className="hover:bg-blue-200 hover:text-blue-600">
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td className="flex gap-3 ">
                    <img className="w-5 h-5" src="./images/Ellipse 104.png"></img>
                    <span className="text-blue-500 font-thin text-[12px]">
                      Ui Design
                    </span>
                  </td>
                  <td>03/12/2021</td>
                  <td className="text-red-500">5/12/2021</td>
                  <td>5 Member</td>
                  <td className=" text-white ">
                    <label className="donelbl h-10 ">Done</label>
                  </td>
                  <td className=" actionbtn flex gap-6 ">
                    <img className="actionbtn1" src="./images/Edit.png"></img>
                    <img className="actionbtn2" src="./images/Delete.png"></img>
                  </td>
                </tr>

                <tr className="hover:bg-blue-200 hover:text-blue-600">
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td className="flex gap-3 ">
                    <img className="w-5 h-5" src="./images/Group 531.png"></img>
                    <span className="text-blue-500 font-thin text-[12px]">
                      Logo Design
                    </span>
                  </td>
                  <td>03/12/2021</td>
                  <td className="text-red-500">5/12/2021</td>
                  <td>5 Member</td>
                  <td className=" text-white ">
                    <label className="donelbl h-10 ">Done</label>
                  </td>
                  <td className=" actionbtn flex gap-6 ">
                    <img className="actionbtn1" src="./images/Edit.png"></img>
                    <img className="actionbtn2" src="./images/Delete.png"></img>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Calendar;
