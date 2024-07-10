

import React from 'react'
import "./CalendarMonth.css"
import Menubar2 from './Menubar2'
import ScheduleCalendar from './ScheduleCalendar'
import { useNavigate } from 'react-router-dom'



const CalendarMonth = () => {
  return (
    <>
    

    <div className='calendar-conatiner'>
    <div class="calendarmonth">
    <header>
      <p className='heading1 font-bold'>December 2, 2021</p>
    </header>
    <div class="calendardays">
      <div class="calendarday-name">Sun</div>
      <div class="calendarday-name">Mon</div>
      <div class="calendarday-name">Tue</div>
      <div class="calendarday-name">Wed</div>
      <div class="calendarday-name">Thu</div>
      <div class="calendarday-name">Fri</div>
      <div class="calendarday-name">Sat</div>

      <div class="calendarday prev-month">29</div>
      <div class="calendarday prev-month">30</div>
      <div class="calendarday">01</div>
      <div class="calendarday">
        <div class="calendardate w-24">02<br/>
          <span className='freeday'>Free day</span> <br/>
           <span className='partytime'>Party Time</span> <br/>
            <span className='more1'>More</span></div></div>
        
      <div class="calendarday">03</div>
      <div class="calendarday">04</div>
      <div class="calendarday">05</div>
      <div class="calendarday">06</div>
      <div class="calendarday">07</div>
      <div class="calendarday">08</div>
      <div class="calendarday">09</div>
      <div class="calendarday">10</div>
      <div class="calendarday">11</div>
      <div class="calendarday">12</div>
      <div class="calendarday">13</div>
      <div class="calendarday">14</div>
      <div class="calendarday">15</div>
      <div class="calendarday">
        <div class="calendardate w-24 ">16<br/>
        <div class="calendarevent font-thin "><span className='victoryday '>Victory day</span></div></div>
      </div>
      <div class="calendarday">17</div>
      <div class="calendarday">18</div>
      <div class="calendarday">19</div>
      <div class="calendarday">20</div>
      <div class="calendarday">
        <div class="calendardate w-24">21</div>
        <div class="calendarevent" ><span className='byfriend'>Invited by friends</span></div>
      </div>
      
      <div class="calendarday">22</div>
      <div class="calendarday">23</div>
      <div class="calendarday">24</div>
      <div class="calendarday">
        <div class="calendardate w-24">25</div>
        <div class="calendarevent"><span className='christmasday'>Christmas Day</span></div>
      </div>
      <div class="calendarday">26</div>
      <div class="calendarday">27</div>
      <div class="calendarday">28</div>
      <div class="calendarday">29</div>
      <div class="calendarday">30</div>
      <div class="calendarday">31</div>
      <div class="calendarday next-month">01</div>
      <div class="calendarday next-month">02</div>
    </div>
  </div>

                </div>
    
    
    </>
  )
}

export default CalendarMonth