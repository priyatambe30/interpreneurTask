

import React, { useState } from 'react'
import "./CalendarCreateAnEvent.css"

const CalendarCreateAnEvent = ({onClose}) => {
    const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState([]);
  const [location, setLocation] = useState('');
  
  const handleSave = () => {
    // Save event logic
    console.log({
      title,
      date,
      time,
      people,
      location
      
    });window.alert("Event is created successfully");
  };
  return (
    <div className='CalendarCreateAnEvent-container'>

    
    <div className="popup-container">
      <div className="popup">
      <div className="create-event">
      <div className="create-event-and-btn flex gap-64">
      <h2 className='font-bold'>Create an Event</h2>
      <img className='closeimgBtn' src='./images/Group 109.png'  onClick={onClose}></img>
      </div>
      <div className="event-type flex gap-4">
        <div className='eventbtn'><button className='eventbtn'>Event</button> </div>
        <div><button className='reminderbtn '>Reminder</button></div>
       <div><button className='taskbtn2 '>Task</button></div> 
      </div>
      <div className=''><input className='addtitle bg-slate-200'
        type="text" 
        placeholder="Add title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      /></div>


      <div className=' datetime-container flex gap-8 bg-slate-100 '>
        
            <div className='adddate flex gap-4'>
                  <img className='w-4 h-4 ml-2 mt-2' src='./images/Time Circle (2).png'></img>
              <input  className='text-slate-500'
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)}  />   
          </div>   

            <div className='timediv'>
              <input className='text-slate-500'
              type="time" value={time} onChange={(e) => setTime(e.target.value)}   />
            </div>
      </div>


      <div className='timezonelbl'>
      <label className='text-slate-500'>Time zone - Does not repeat</label><br></br>
      <a className='text-rose-500' href='#'>Find a time</a>
      </div>


      <div className='peoplelocation-btn flex gap-8'>     
            <div>
            <img className='addpeopleImg w-4 h-4 ml-2 mt-2' src='./images/3 User.png'></img>
            <button className='addpeople'>Add People</button>
            </div>

            <div>
            <img className='addlocationImg w-4 h-4 ml-2 mt-2' src='./images/Location (2).png'></img>
            <button className='addlocation'>Add Location</button>
            </div>      
      </div>

      <div className='johndeo flex gap-4 '>
      <div className='text-slate-300'><img className='w-4 h-4 ml-2 mt-2' src='./images/Calendar (3).png'></img></div>
      <div className='text-slate-300'><label className='text-black'>John Deo </label><br/>
      <span className='text-slate-500 text-[8px]'>Busy  - Default visibllity - notity 30 minutes before</span> </div> 
      </div>

      <div className='saveclose-btngrp flex gap-4 '>
              
      <button className='closebtn1' onClick={onClose}>Close</button>   
            <button className='savebtn' onClick={handleSave}>Save</button>
            
            </div>
    </div>
  

        
        
      </div>
    </div>
    </div>
  )
}

export default CalendarCreateAnEvent