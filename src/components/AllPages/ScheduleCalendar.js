

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './ScheduleCalendar.css'

const ScheduleCalendar = () => {

    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };
  return (
    <div className="calendar-container">
            <Calendar
                onChange={onChange}
                value={date}
            />
        </div>
  )
}

export default ScheduleCalendar