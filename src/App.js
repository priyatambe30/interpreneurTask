import React, { useState } from "react";
import { Route, Router, Routes } from 'react-router-dom'
import "./App.css";
import Dashboard1 from "./components/AllPages/Dashboard1";
import Analytics from "./components/AllPages/AnalyticsPages/Analytics";
import Settings from "./components/AllPages/Settings";
import Messages from "./components/AllPages/Messages";
import Notification from "./components/AllPages/Notification";
import Invoice from "./components/AllPages/Invoice";
import Calendar from "./components/AllPages/Calendar";
import Schedule from "./components/AllPages/Schedule";
import MenuBar from "./components/AllPages/MenuBar";
import ImagesArray from "./components/AllPages/ImagesArray";
import Login from "./components/AllPages/Login/Login";
import RecoverPage from "./components/AllPages/Login/RecoverPage";
import AccountConfirm from "./components/AllPages/Login/AccountConfirm";
import LoginPage from "./components/AllPages/Login/LoginPage";
import ScheduleTaskPreview from "./components/AllPages/ScheduleTaskPreview";
import Menubar2 from "./components/AllPages/Menubar2";
import SignUp from "./components/AllPages/Login/SignUp";
 import DasboardViewProduct from "./components/AllPages/DasboardViewProduct";
import InvoiceCreateNew from "./components/AllPages/InvoiceCreateNew";
import CalendarDay from "./components/AllPages/CalendarCombine";
import CalendarMonth from "./components/AllPages/CalendarMonth";
//import CalendarYear from "./components/AllPages/CalendarYear";
import CalendarCombine from "./components/AllPages/CalendarCombine";
import CalendarYear from "./components/AllPages/CalendarYear";
import CalendarCreateAnEvent from "./components/AllPages/CalendarCreateAnEvent";
// import { Badge } from "react-bootstrap";


function App() {
  const [loadComponent, setLoadComponent] = useState(<Dashboard1 />);
  const [img, setImg] = useState("");
  // const imgArr=[
  //   { src:"./images/Category.png",
  //   },
  //   { src:"./images/Analytics.png",
  //   },
  //   { src:"./images/Invoice.png",
  //   },
  //   { src:"./images/Schedule.png",
  //   },
  //   { src:"./images/Calendar.png",
  //   },
  //   { src:"./images/Messages.png",
  //   },
  //   { src:"./images/Notification.png",
  //   },
  //   { src:"./images/Settings.png",
  //   },
    
  // ];

  const btnArr = [
    {
      id: 1,
      label: "Dashboard",
      src:"./images/Category.png",
      
      btFun: () => {
        setLoadComponent(<Dashboard1 />);
              },
      
      
    },

    {
      id: 2,
      label: "Analytics",src:"./images/Analytics.png",
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Analytics />);
      },
    },

    {
      id: 3,
      label: "Invoice",src:"./images/Invoice.png",
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Invoice />);
      },
    },

    {
      id: 4,
      label: "Schedule",src:"./images/Schedule.png",
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Schedule />);
      },
    },

    {
      id: 5,
    src:"./images/Calendar.png",
      label: "Calender", 
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Calendar />);
      },
    },

    {
      id: 6,
      label: "Messages",src:"./images/Messages.png",
      badge:49,
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Messages />);
      },
    },

    {
      id: 7,
      label: "Notification",src:"./images/Notification.png",
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Notification />);
      },
    },

    {
      id: 8,
      label: "Settings",src:"./images/Settings.png",
      btFun: () => {
        // setLoadComponent(<AddHealthData />)
        setLoadComponent(<Settings />);
      },
    },
  ];
  return (
    <>
      
      <div className="container">
        {/* <Router>  */}
          <div className="">
          <Routes>
          <Route  path="/" element={<Login/>}></Route>
          
              <Route path="/menubar2" element={<Menubar2/>}></Route> 
              <Route  path="/Login-Page" element={<LoginPage/>}></Route>
          <Route  path="/dashboard1" element={<Dashboard1/>}></Route>
          <Route path="/invoice" element={<Invoice/>}></Route>
          <Route path="/analytics" element={<Analytics/>}></Route>
          <Route path="/schedule" element={<Schedule/>}></Route>
          <Route path="/calendar" element={<Calendar/>}></Route>
          <Route path="/messages" element={<Messages/>}></Route>
          <Route path="/notification" element={<Notification/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
              <Route path="/recover-page" element={<RecoverPage/>}></Route>
              <Route path="/sign-up" element={<SignUp/>}></Route>
              <Route path="/ScheduleTaskPreview" element={<ScheduleTaskPreview/>}></Route>
              <Route path="/account-confirm" element={<AccountConfirm/>}></Route>
              <Route path="/dasboard-view-product" element={<DasboardViewProduct/>}></Route>
              <Route path="/invoice-create-new" element={<InvoiceCreateNew/>}></Route>
              <Route path="/calendar-combine" element={<CalendarCombine/>}></Route>
              <Route path="/calendar-month" element={<CalendarMonth/>}></Route>
              <Route path="/calendar-year" element={<CalendarYear/>}></Route>
              <Route path="/calendar-create-event" element={<CalendarCreateAnEvent/>}></Route>
              
              
          </Routes>   
          </div>   
            
         {/* </Router> */}




        {/* <div className="container"> */}

        {/* <div>
          <Login/>
        </div> */}


        {/* <div className="Menubar2">
          <MenuBar btnArr={btnArr} />
        </div> */}

{/* <div className="Menubar2">
          <Menubar2 />
        </div> */}

        {/* <div className="logo1">
          <img className="logo" src="/images/Logo and company.png "></img>
        </div>
        
        <div className="lampBgImg   w-20 h-20" >        
        </div>
        <div className="lamp-container flex flex-col gap-y-6">
        
          <img
            className=" w-20 h-20"
            src="/images/object.png"
            alt="object photo"
          ></img>
          <button className="lampbtn hover-bg-sky-500">Upgrade Now</button>
          </div>
          <div className="profile">
            <img className="w-10 h-10" src="/images/Profile photo.png"alt="profile photo" ></img>
            <label className="">Easin Arafat<br/><span className="font-sm text-[gray]">Free Accountant</span></label>
          
          <img className="w-5 h-5" src="/images/Logout.png"alt="logout icon"></img>
          </div>  */}
        
        
         {/* <div className="loadComponent font-bold"> {loadComponent}</div> */}
       
      </div>
    </>
  );
}

export default App;
