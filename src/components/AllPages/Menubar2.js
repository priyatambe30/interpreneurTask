import React, { useState } from "react";
import "./Menubar2.css";
import Dashboard1 from "./Dashboard1";

import Settings from "./Settings";
import Messages from "./Messages";
import Notification from "./Notification";
import Invoice from "./Invoice";
import Calendar from "./Calendar";
import Schedule from "./Schedule";
import Analytics from "./AnalyticsPages/Analytics";
import { useNavigate } from "react-router-dom";

const Menubar2 = () => {
  const [loadComponent, setLoadComponent] = useState(<Dashboard1 />);
  const [menuVisible, setMenuVisible] = useState(true);
  const navigate = useNavigate();

  const navigatetologin=()=>{
    navigate('/');
  }

  const btnArr = [
    {
      id: 1,
      label: "Dashboard",
      src: "./images/Category.png",

      btFun: () => {
        navigate("/dashboard1");
      },
    },

    {
      id: 2,
      label: "Analytics",
      src: "./images/Analytics.png",
      btFun: () => {
        navigate("/analytics");
      },
    },

    {
      id: 3,
      label: "Invoice",
      src: "./images/Invoice.png",
      btFun: () => {
        navigate("/invoice");
      },
    },

    {
      id: 4,
      label: "Schedule",
      src: "./images/Schedule.png",
      btFun: () => {
        navigate("/schedule");
      },
    },

    {
      id: 5,
      src: "./images/Calendar.png",
      label: "Calender",
      btFun: () => {
        //navigate("/calendar");
         navigate("/calendar-combine");
      },
    },

    {
      id: 6,
      label: "Messages",
      src: "./images/Messages.png",
      bagdge: 49,
      btFun: () => {
        navigate("/messages");
      },
    },

    {
      id: 7,
      label: "Notification",
      src: "./images/Notification.png",
      btFun: () => {
        navigate("/notification");
      },
    },

    {
      id: 8,
      label: "Settings",
      src: "./images/Settings.png",
      btFun: () => {
        navigate("/settings");
      },
    },
  ];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  return (
    <>
      <div className="flex">
        <div className="buttonContent1  ">
          <div className="logo1">
            <img
              className="logo"
              id="menu"
              src="/images/Logo and company.png "
              onClick={toggleMenu}
            ></img>
          </div>

          <div className="Menubar2">
            {btnArr.map((bt) => (
              <label id="menu-itemsss"
                key={bt.id}
                onClick={bt.btFun}
                className="  flex items-center  flex text-black hover:bg-sky-100 hover:text-blue-600 "
              >
                <div className="menuimage">
                  <img className="flex  h-5 w-5  space-y-8 " src={bt.src}></img>
                </div>
                {/* <div>
               {bt.label}<span className="message-badge">{bt.bagdge}</span>
               </div> */}
                <div>
                <span 
                  id='menu-box' 
                  className={`menu-box ${menuVisible ? 'visible' : ''}`}
                >
                    {bt.label}<mark className="badgemark">{bt.bagdge}</mark>
                  </span>
                </div>
              </label>
            ))}
          </div>

          <div className="lampBgImg   w-20 h-20" id='menu-box' 
                  style={{ display: menuVisible ? 'block' : 'none' }}></div>
          <div className="lamp-container1 flex flex-col gap-y-6" id='menu-box' 
                  style={{ display: menuVisible ? 'block' : 'none' }}>
            <img
              className=" w-40 h-20"
              src="/images/object.png"
              alt="object photo"
              id="menu-box"
              style={{ display: menuVisible ? "block" : "none" }}
            ></img>

            <button
              className="lampbtn hover-bg-sky-500"
              id="menu-box"
              style={{ display: menuVisible ? "block" : "none" }}
            >
              Upgrade Now
            </button>
          </div>
          <div className="profile1">
            <img
              className="w-10 h-10"
              src="/images/Profile photo.png"
              alt="profile photo"
            ></img>
            <label
              id="menu-box"
              style={{ display: menuVisible ? "block" : "none" }}
              className=""
            >
              Easin Arafat
              <br />
              <span className="font-sm text-[gray]">Free Accountant</span>
            </label>

            <img
              className="w-5 h-5"
              src="/images/Logout.png"
              alt="logout icon" onClick={navigatetologin}
            ></img>
          </div>

          {/* <div className="loadComponent font-bold"> {loadComponent}</div> */}
        </div>

        {/* dashboard code */}

        {/* <div className=" flex">
        
        <div className="dashboard-layout font-bold flex">
          Dashboard
          <div className="datepicker-container flex  gap-x-8">
            <input type="date" id="birthday" name="birthday" />
            <input type="date" id="birthday" name="birthday" />
            
          </div>
          <div className="menu-products1 flex  grid-cols-4 space-x-4 divide-x">
            <div className="products flex space-x-4  bg-neutral-100">
              <img
                className="  w-20 h-20"
                src="/images/Heart1.png"
                alt=""
              ></img>
              <p className=" font-black text-[18px]  w-64 h-20 grid grid-cols-1 divide-y  leading-[3rem] ">
                178+
                <br />
                <span className=" font-thin text-[12px]">Save Products</span>
              </p>
            </div>

            <div className=" products flex space-x-4  bg-neutral-100">
              <img className="  w-20 h-20" src="/images/Icon1.png" alt=""></img>
              <p className="flex font-black text-[18px] w-64 h-20 grid grid-cols-1 divide-y leading-[3rem]  ">
                20+
                <span className=" font-thin text-[12px]">Stock Products</span>
              </p>
            </div>

            <div className=" products flex space-x-4  bg-neutral-100">
              <img className="  w-20 h-20" src="/images/Incon.png" alt=""></img>
              <p className="flex font-black text-[18px] w-64 h-20 grid grid-cols-1 divide-y leading-[3rem]  ">
                190+
                <span className=" font-thin text-[12px]">Sales Products</span>
              </p>
            </div>

            <div className=" products flex space-x-4  bg-neutral-100">
              <img className="  w-20 h-20" src="/images/Icon2.png" alt=""></img>
              <p className="flex font-black text-[18px] w-64 h-20 grid grid-cols-1 divide-y leading-[3rem]  ">
                12+
                <span className=" font-thin text-[12px]">Job Application</span>
              </p>
            </div>
          </div>
         
          <div className="dashboard-report-container ">
            <div className="report-row ">
              <img
                className=" reportImg"
                src="/images/Reports.png"
                alt=""
              ></img>
            </div>
          </div>
          
          <div className="dashboard-analytics-container">
            <div className="analytics"></div>
            <img
              className=" analyticsImg"
              src="/images/AnalyticsReport.png"
              alt=""
            ></img>
          </div>
          
          <div className="dashboard-ordertable-container flex">
            <div><p>Recent Orders</p>

            <div className="dashboard-ordertable flex">
               <table className="Full-table  ">
                <thead>
                  <tr>
                    <th>
                      <div className="dropdown">
                        <button className="dropbtn">
                          Tracking No
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content text-white">
                          <a href="#">Tracking No</a>
                          <a href="#">Tracking No</a>
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="dropdown">
                        <button className="dropbtn">
                          Product Name
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content text-white">
                          <a href="#">Product Name</a>
                          <a href="#">Product Name</a>
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="dropdown">
                        <button className="dropbtn">
                          Price
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content text-white">
                          <a href="#">Price</a>
                          <a href="#">Price</a>
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="dropdown">
                        <button className="dropbtn">
                          Total Order
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content text-white">
                          <a href="#">Order 1</a>
                          <a href="#">Order 2</a>
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="dropdown">
                        <p className="dropbtn">Total Amount </p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="tbody border-separate border-spacing-2 border border-slate-400">
                  <tr>
                    <td>#876364</td>
                    <td className="flex gap-2">
                      <img
                        className="ImagePrduct  flex-cols-2 w-8 h-8"
                        src="/images/Rectangle2.png"
                      />
                      <span className="pb-2">Camera Lens</span>
                    </td>
                    <td>$178</td>
                    <td className=" text-cyan-600  w-3 h-2">325</td>
                    <td>$1,46,660</td>
                  </tr>
                  <tr>
                    <td>##876368</td>
                    <td className="flex gap-2">
                      <img
                        className="ImagePrduct w-5 h-5"
                        src="/images/Rectangle1.png"
                      />
                      <p>Black Sleep Dress</p>
                    </td>
                    <td>$14</td>
                    <td className=" text-cyan-600  w-3 h-2">53</td>
                    <td>$46,660</td>
                  </tr>
                  <tr>
                    <td>#876412</td>
                    <td className="flex gap-2">
                      <img
                        className="ImagePrduct w-5 h-5"
                        src="/images/Rectangle4.png"
                      />
                      <p>Argan Oil</p>
                    </td>
                    <td>$21</td>
                    <td className=" text-cyan-600">78</td>
                    <td>$3,46,676</td>
                  </tr>
                  <tr>
                    <td>#876621</td>
                    <td className="flex gap-2">
                      <img
                        className="ImagePrduct w-5 h-5"
                        src="/images/Rectangle3.png"
                      />
                      <p>EAU DE Parfum</p>
                    </td>
                    <td>$32</td>
                    <td className="totalorder  text-cyan-600 ">98</td>
                    <td>$3,46,981</td>
                  </tr>
                </tbody>
              </table> 
            </div>
            </div>
          
          
          <div className="topsellingproduct-container ">
            <p className=" space-y-4">Top selling Products</p>
            <div className="products1">
              <div className=" flex  text-left space-x-8  space-y-4  bg-neutral-100 ">
                <img
                  className="  w-20 h-20"
                  src="/images/shoes.png"
                  alt=""
                ></img>
                <p className="flex font-black text-[15px]  w-53 h-30 grid grid-cols-1 divide-y leading-[3rem] ">
                  178+
                  <img
                    className="  w-15 h-3"
                    src="/images/star.png"
                    alt=""
                  ></img>
                  <span className=" font-thin text-[12px]">$87</span>
                </p>
              </div>

              <div className=" flex space-x-4  bg-neutral-100 ">
                <img
                  className="  w-20 h-20"
                  src="/images/iPhone.png"
                  alt=""
                ></img>
                <p className="flex font-black text-[15px]  w-53 h-30 grid grid-cols-1 divide-y leading-[3rem] ">
                  178+
                  <img />
                  <img
                    className="  w-15 h-3"
                    src="/images/star.png"
                    alt=""
                  ></img>
                  <span className=" font-thin text-[12px]">$987</span>
                </p>
              </div>
            </div>

            
          </div>

          </div>
        </div>
      </div>  */}
      </div>
    </>
  );
};

export default Menubar2;
