import React from 'react'
import './UserData.css'

const UserData = () => {
  return (
    <div id="UserInfo1">
        <div className="UserInfo">
          <div className="UserProf flex grid bg-slate-00">
            <div className="User ">
              <img className="UserImg" src="./images/user1.png"></img>
              <span className="JohnName">John Deo</span>
              <br />
              <span className="PositionJon font-sm">UI/UX Designer</span>
            </div>
          </div>

          <div className="ContactInfo space-y-2 bg-slate-0 grid gap-4 text-left">
            Contact Info
            {/* <h1>Contact Info</h1> */}
            <div className="ContactDetails flex  grid-cols-2 font-thin">
              <div>
                <img className="w-3 h-3" src="./images/Message.png"></img>
              </div>
              <div className="email">
                <label>kajope5182@ummoh.com</label>
              </div>
            </div>
            <div className="ContactDetails flex items-center grid-cols-2 font-thin">
              <div>
                <img className="w-3 h-3" src="./images/Call.png"></img>
              </div>
              <div className="email">
                <label>33757005467</label>
              </div>
            </div>
            <div className="ContactDetails flex items-center grid-cols-2 font-thin">
              <div>
                <img className="w-3 h-3" src="./images/Location.png"></img>
              </div>
              <div className="email">
                <label>
                  2239 Hog Camp Road
                  <br />
                  Schaumburg
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* performanance chart */}
        <div className="PerformanceChart bg-slate-00">
          <img src="./images/performance charts.png"></img>
        </div>

        {/* progress chart */}
        <div className="ProgressChart flex bg-slate-00">
          <div>
            <img src="./images/pie chart 1.png"></img>
          </div>

          <div>
            <img src="./images/pie chart 2.png"></img>
          </div>
        </div>
      </div>
  )
}

export default UserData;