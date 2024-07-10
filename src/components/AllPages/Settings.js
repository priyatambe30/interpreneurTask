

import React from 'react'
import "./Settings.css";
import Menubar2 from "./Menubar2";

const Settings = () => {
  return (
    <>
    
    <div className='flex'>
    <div><Menubar2/></div>
    

    <div className='main-container'>
    
      <div className='header-container flex '>
        <p>Task Preview</p>
        <button className='taskbtn1 font-thin'>+Add Task</button>
      </div>

      <div className='subheader-container flex font-thin text-[10px] '>
        
        <div className='font-thin flex gap-2  '>
        <button className='border-1 gap-8 w-10 hover:bg-sky-400 border-1'>List</button>
        <button className='border-1 gap-8 w-10 hover:bg-sky-400 '>Board</button>
        <button className='border-1 gap-8 w-10 hover:bg-sky-400'>Timeline</button>
        </div>
        
        <div className='calenderbtn  text-[14px]'><button>Calender</button></div>
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