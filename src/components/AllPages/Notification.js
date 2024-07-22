import React from 'react'
 import "./Notification.css"
import Menubar2 from "./Menubar2";

const Notification = () => {
  return (
    <div className="flex">
      <div><Menubar2/></div>

    <div className="notification-main-container  ">
      <div className='notificatin'>Notification</div>


      <div className='leftsidenotification-container'>
      

      <nav id="sidebar">
  <ul class="dots">
    <li>
      <a href="#">
        <span class="glyphicon glyphicon-user"><mark>23</mark></span>
      </a>  

    
      
    </li>
    <li>
      <a href="#">
      <span class="glyphicon glyphicon-envelope"><mark class="big swing">7</mark></span>
      </a>  
    </li>
    <li>
      <a href="#">
      <span class="glyphicon glyphicon-time"><mark class="rubberBand">99</mark></span>
      </a>
    </li>
    <li>
      <a href="#">
      <span class="glyphicon glyphicon-list-alt"></span>
      </a>
    </li>    
    <li>
      <a href="#">
      <span class="glyphicon glyphicon-calendar"><mark class="green wobble">99+</mark></span>
      </a>
    </li>      
    <li>
      <a href="#">
      <span class="glyphicon glyphicon-random"><mark class="blue tada">13</mark></span>
      </a>
      </li>        
  </ul> 
</nav>


      </div>
      
  
  

  
      

      

        
      </div>

      

      </div>
    
  )
}

export default Notification