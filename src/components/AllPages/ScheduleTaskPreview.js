

import React from 'react'
import './ScheduleTaskPreview.css'
import Menubar2 from './Menubar2'
import ScheduleToDo from './ScheduleToDo'
import ScheduleInProgress from './ScheduleInProgress'
import ScheduleInReview from './ScheduleInReview'
import ScheduleDone from './ScheduleDone'
import { useNavigate } from 'react-router-dom'

const ScheduleTaskPreview = () => {
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
  return (
    <>

<div className='flex'>
    <div><Menubar2/></div>
    

    <div className='scheduleTaskPreview-Container1'>
    
      <div className='header-container flex pt-1'>
        <div><p className=' font-bold text-center'>Task Preview</p></div>
        <div className='filterbtn1'>
        <button className=' font-thin'>Filter
          <img className='filterimg1' src='images/Filter (1).png'></img>
          </button>
        </div>
      </div>

      <div className=' schedule-subheader-container flex font-thin text-[10px] '>
        
        <div className='schedule-subheader-container-btn font-thin flex gap-2  '>
        <button className='border-1 gap-8 w-16 hover:bg-sky-400 border-2 hover:text-white' onClick={navigatetolist}>List</button>
        <button className='border-1 gap-8 w-16 hover:bg-sky-400 border-2 hover:text-white 'onClick={navigatetoBoard}>Board</button>
        <button className='border-1 gap-8 w-16 hover:bg-sky-400 border-2 hover:text-white' onClick={navigatetotimeline}>Timeline</button>
        </div>
        
        <div className='searchbtn1 flex text-[14px]'>
          <input type='text' placeholder='search...' className='rounded-lg font-thin text-[12px]'></input>
        <button type="submit"><i className="fafasearch fa fa-search"></i></button></div>
      </div>


      <div className=' '>
        {/* left container */}
        <div className='schedule-container flex grid cols-4 grid-flow-col gap-4'>
        
          <div className=' todo '>
            <ScheduleToDo/>
          </div>

          <div className=' inprogress '>
            <ScheduleInProgress/>
          </div>

          <div className=' inreview '>
            <ScheduleInReview/>
          </div>

          <div className=' done '>
            <ScheduleDone/>
          </div>


        </div>


       
      </div>
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ScheduleTaskPreview