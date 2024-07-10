

import React from 'react'
import './ScheduleTaskPreview.css'
import Menubar2 from './Menubar2'
import ScheduleToDo from './ScheduleToDo'
import ScheduleInProgress from './ScheduleInProgress'
import ScheduleInReview from './ScheduleInReview'
import ScheduleDone from './ScheduleDone'

const ScheduleTaskPreview = () => {
  return (
    <>

<div className='flex'>
    <div><Menubar2/></div>
    

    <div className='scheduleTaskPreview-Container1'>
    
      <div className='header-container flex '>
        <p className='pb-2 font-bold'>Task Preview</p>
        <button className='filterbtn font-thin'>Filter<img className='filterimg' src='images/Filter (1).png'></img></button>
      </div>

      <div className=' schedule-subheader-container flex font-thin text-[10px] '>
        
        <div className='schedule-subheader-container-btn font-thin flex gap-2  '>
        <button className='border-1 gap-8 w-10 hover:bg-sky-400 border-2 hover:text-white'>List</button>
        <button className='border-1 gap-8 w-10 hover:bg-sky-400 border-2 hover:text-white'>Board</button>
        <button className='border-1 gap-8 w-10 hover:bg-sky-400 border-2 hover:text-white'>Timeline</button>
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