import React, { useState } from "react";
import "./App.css";
import Dashboard1 from "./components/AllPages/Dashboard1";
import Analytics from "./components/AllPages/Analytics";
import Settings from "./components/AllPages/Settings";
import Messages from "./components/AllPages/Messages";
import Notification from "./components/AllPages/Notification";
import Invoice from "./components/AllPages/Invoice";
import Calendar from "./components/AllPages/Calendar";
import Schedule from "./components/AllPages/Schedule";
import MenuBar from "./components/AllPages/MenuBar";
import ImagesArray from "./components/AllPages/ImagesArray";

function App() {
  const [loadComponent, setLoadComponent] = useState(<Dashboard1 />);
  const [img, setImg] = useState("");
  const imgArr=[
    { src:"./images/Category.png",
    },
    { src:"./images/Analytics.png",
    },
    { src:"./images/Invoice.png",
    },
    { src:"./images/Schedule.png",
    },
    { src:"./images/Calendar.png",
    },
    { src:"./images/Messages.png",
    },
    { src:"./images/Notification.png",
    },
    { src:"./images/Settings.png",
    },
    
  ];

  const btnArr = [
    {
      id: 1,
      label: "Dashboard",

      btFun: () => {
        setLoadComponent(<Dashboard1 />);
      },
    },

    {
      id: 2,
      label: "Analytics",
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Analytics />);
      },
    },

    {
      id: 3,
      label: "Invoice",
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Invoice />);
      },
    },

    {
      id: 4,
      label: "Schedule",
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Schedule />);
      },
    },

    {
      id: 5,
      label: "Calender",
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Calendar />);
      },
    },

    {
      id: 6,
      label: "Messages",
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Messages />);
      },
    },

    {
      id: 7,
      label: "Notification",
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Notification />);
      },
    },

    {
      id: 8,
      label: "Settings",
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Settings />);
      },
    },
  ];
  return (
    <>
      <div className="container">
        <div className="Menubar">
          <MenuBar btnArr={btnArr} />
        </div>

        <div className="logo">
          <img src="/images/Logo and company.png "></img>
        </div>
        <div className="ImageContent flex flex-col space-x-2 gap-y-6 ">
          <ImagesArray imgArr={imgArr}/>
        </div>
        <div className="lampBgImg   w-20 h-20" >
        {/* <img 
            src="/images/object (1).png"
            alt="object photo"
          ></img> */}
        </div>
        <div className="lamp-container flex flex-col gap-y-6">
        
          <img
            className=" w-20 h-20"
            src="/images/object.png"
            alt="object photo"
          ></img>
          <button className="lampbtn">Upgrade Now</button>
          </div>
          <div className="profile">
            <img className="w-10 h-10" src="/images/Profile photo.png"alt="profile photo" ></img>
            <label className="">Easin Arafat<br/><span className="font-sm text-[gray]">Free Accountant</span></label>
          {/* <h4>Easin Arafat</h4>
          <h5>Free Accountant</h5> */}
          <img className="w-5 h-5" src="/images/Logout.png"alt="logout icon"></img>
          </div>
        
        
        <div className="loadComponent font-bold"> {loadComponent}</div>
      </div>
    </>
  );
}

export default App;
