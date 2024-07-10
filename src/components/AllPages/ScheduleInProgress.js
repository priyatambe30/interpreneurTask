

import React from 'react'
import "./ScheduleInProgress.css"


const ScheduleInProgress = () => {
  const tasks = [
    {
      title: 'Dashboard Design',
      priority: 'High',
      status: 'On Track',
      description: 'Discussion for management dashboard UI design',
      src:" ",
      src2:"",
      comments: 112,
      likes: '1.2k',
    },
    {
      title: 'Landing Page Design',
      priority: 'Low',
      status: '',
      description: 'Discussion for management dashboard UI design',
      src:"./images/image 1.png",
       src2:"./images/image 2.png",
      comments: 112,
      likes: '1.2k',
    },
    {
      title: 'E-Shop Mobile App',
      priority: 'Low',
      status: 'On Track',
      description: 'Discussion for management dashboard UI design',
      src:" ",
      src2:"",
      comments: 112,
      likes: '1.2k',
    },
    
  ];return (
    <>
    <div className="scheduletodolist">
      <h1 className='pt-0 pb-1 font-bold'>In Progress</h1>
      <div className="task-list1">
        {tasks.map((task, index) => (
          <div className="task1 grid" key={index}>
            <div className="task-header1  ">
            <input id="draft" className="peer/draft rounded-full" type="checkbox" name="status" unchecked />
            {/* <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label> */}
              <h2>{task.title}</h2><br/>
              <button>...</button>
              
            </div>
            <div className='flex gap-4'>
            <div className= {`priority ${task.priority.toLowerCase()}`}>{task.priority}</div>
            {task.status && <div className={`status ${task.status.toLowerCase().replace(' ', '-')}`}>{task.status}</div>}
              </div>
            <div className='description'>
            <p>{task.description}</p>
              </div>
            <div className='flex gap-6 w-40 h-10 '><img src={task.src}></img><img src={task.src2}></img></div>
            


            <div className="task-footer">
              <div className="avatar-group">
                {/* Replace with actual avatars if available */}
                <div className="avatar"><img className='w-16 h-8' src='./images/People.png'></img></div>
                {/* <div className="avatar">👤</div>
                <div className="avatar">👤</div>
                <div className="avatar">+</div> */}
              </div>
              <div className="task-stats ">
                <img className='w-2 h-2' src='./images/Chat.png'></img><span className='text-[8px]'>{task.comments}</span>
                {/* <span>💬 {task.comments}</span> */}
                <img className='w-2 h-2' src='./images/Heart (2).png'></img ><span className='text-[8px]'> {task.likes}</span>
                {/* <span>❤️ {task.likes}</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
 
  
 }

export default ScheduleInProgress