
import React, { useState } from 'react'
import "./CalendarCombine.css"
import Menubar2 from './Menubar2'
import ScheduleCalendar from './ScheduleCalendar'
import { useNavigate } from 'react-router-dom'
import CalendarMonth from './CalendarMonth'
import CalendarYear from './CalendarYear'
import CalendarDay from './CalendarDay'
import CalendarCreateAnEvent from './CalendarCreateAnEvent'

const CalendarCombine = () => {
    const navigate= useNavigate();
    const [activeComponent, setActiveComponent] = useState('');
    // const navigatetoCalendarCreateAnEvent=()=>{
    //   navigate('/calendar-create-event');
    // }
   
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  

  return (
    <>
    
    <div className='flex'>

        <div><Menubar2/></div>

        <div className='CalendarDay-container'>
        <div className='CalendarDay-subcontainer '>
            <div className='calendarday-header flex '>
                <p className=' font-bold text-[18px] '>Calendar</p>
                <div className='calendar-grop-btn flex  gap-4 '>
                {/* <button className='daybtn'onClick={navigatetoDay}>Day</button>
                <button className='weekbtn' >Week</button>
                <button className='monthbtn'  onClick={navigatetoMonth}>Month</button>
                <button className='yearbtn'  onClick={navigatetoYear}>Year</button> */}
                <button className='daybtn' onClick={(day) => setActiveComponent('day')}>day</button>
        <button className='weekbtn' >week</button>
        <button className='monthbtn' onClick={() => setActiveComponent('month')}>month</button>
        <button className='yearbtn'  onClick={() => setActiveComponent('year')}>year</button>
                </div>

            </div>
                {/* combine container */}

                <div className=' calendar-combine-conatiner flex'>

                    {/* left container */}
                    <div className='calendar-left-conatiner'>
                    <div className="calendar-box">
            <div>
              <button className="createschedulebtn font-thin text-white" onClick={openPopup}>
                +Create Schedule
              </button>
              {isPopupOpen &&(<CalendarCreateAnEvent onClose={closePopup} />
      )}
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
              <p className='font-bold'>People</p>
              <div className="searchbtn flex">
                <button type="submit" className=" fasearch bg-slate-100">
                  {" "}
                  <i className="fa fa-search"></i>
                </button>
                <input
                  type="text"
                  placeholder="search for people... "
                  className="searchtext font-thin rounded-full text-[12px] "
                ></input>
                     </div>
                <div className="flex grid gap-2 font-thin  ">
                  <div className="left-chatting-list grid flex border-solid border-2 border-slate-200">
                    <ul
                      role="list"
                      className="p-2 divide-y divide-slate-200 gap-8"
                    >
                      <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0 ">
                        <img
                          className="h-7 w-7 rounded-full"
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

                  <div className="left-chatting-list grid flex border-solid border-2 border-slate-200">
                    <ul
                      role="list"
                      className="p-2 divide-y divide-slate-200 gap-4"
                    >
                      <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0 ">
                        <img
                          className="h-7 w-7 rounded-full"
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

                  <div className="left-chatting-list grid flex border-solid border-2 border-slate-200">
                    <ul
                      role="list"
                      className="p-2 divide-y divide-slate-200 gap-4"
                    >
                      <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0 ">
                        <img
                          className="h-7 w-7 rounded-full"
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

                    {/* right container */}
                    <div className='calendar-right-conatiner'>
                     
                      
                    {activeComponent === 'day' && <CalendarDay />}
        {/* {activeComponent === 'week' && < />} */}
        {activeComponent === 'month' && <CalendarMonth />}
        {activeComponent === 'year' && <CalendarYear />}

                    </div>
                </div>


            </div>
        </div>



    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default CalendarCombine;