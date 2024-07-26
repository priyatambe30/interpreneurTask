

import React from 'react'
import "./Settings.css";
import Menubar2 from "./Menubar2";
import { useNavigate } from 'react-router-dom';

const Settings = () => {
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
  const navigatetocalendar = () => {
    navigate('/calendar-combine')
  };
  return (
    <>
    
    <div className='flex'>
    {/* <div className='commonmenubar border-solid border-2 border-indigo-600'><Menubar2/></div> */}
    <div className='commonmenubar '><Menubar2/></div>
    

    <div className='main-container'>
    
      <div className='header-container flex '>
        <p>Task Preview</p>
        <button className='taskbtn1 font-thin'>+Add Task</button>
      </div>

      <div className='subheader-container flex font-thin text-[10px] '>
        
        <div className='header-button font-thin flex gap-3 border-2 border-solid-slate-300 '>
        <button className='border-2 border-slate-300 gap-8 w-16 hover:bg-sky-400 hover:text-white 'onClick={navigatetolist}>List</button>
        <button className='border-2 border-slate-300 gap-8 w-16 hover:bg-sky-400 hover:text-white 'onClick={navigatetoBoard}>Board</button>
        <button className='border-2 border-slate-300 gap-8 w-16 hover:bg-sky-400 hover:text-white'onClick={navigatetotimeline}>Timeline</button>
        </div>
        
        <div className='calenderbtnsetting1  text-[14px]'onClick={navigatetocalendar}><button>Calender</button></div>
      </div>


      <div className='flex w-full '>
        {/* left container */}
        <div className='left-container flex flex-col gap-2'>

          <div className=' dropdown1 '>
            <button className='dropdownbtn1'>To Do<a className='arrow-symbol fa fa-caret-right'></a></button>
            <div className='dropdown-content'>
              <a href='#'>1</a>
              <a href='#'>2</a>
            </div>
          </div>

          <div className=' dropdown1 '>
            <button className=' dropdownbtn1'>Doing<a className='arrow-symbol fa fa-caret-right'></a></button>
            <div className='dropdown-content'>
              <a href='#'>1</a>
              <a href='#'>2</a>
            </div>
          </div>

          <div className=' dropdown1 '>
            <button className=' dropdownbtn1'>Done<a className='arrow-symbol fa fa-caret-right'></a></button>
            <div className='dropdown-content'>
              <a href='#'>1</a>
              <a href='#'>2</a>
            </div>
          </div>


        </div>


        {/* right container */}
        <div className='right-container bg-sky-200'>
        <img className='taskimage' src='./images/calender and task.png'></img>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Settings