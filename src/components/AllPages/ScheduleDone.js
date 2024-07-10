

import React from 'react'
import "./ScheduleDone"
import "./ScheduleDone.css"

const ScheduleDone = () => {
  const tasks = [
    {
      title: 'Landing Page Design',
      priority: 'High',
      status: 'On Track',
      description: 'Discussion for management dashboard UI design',
      src1:"./images/Image (2).png",
       src2:"./images/Image 2 (2).png",
      comments: 112,
      likes: '1.2k',
    },
    
  ];
  return (
    <>
    <div className="scheduledonelist">
      <h1 className='pt-0 pb-1 font-bold'>Done</h1>
      <div className="task-list4">
        {tasks.map((task, index) => (
          <div className="task4 grid" key={index}>
            <div className="task-header4  ">
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

              <div className='flex gap-4  '>
                <img className='w-40 h-10' src={task.src1}></img>
                <img className='w-40 h-10' src={task.src2}></img>
                </div>

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
                
                <img className='w-2 h-2' src='./images/Heart (2).png'></img ><span className='text-[8px]'> {task.likes}</span>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
 
  
 }


export default ScheduleDone