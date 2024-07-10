import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import React from 'react'
import "./Dashboard1.css";
// import MenuBar from "./MenuBar";
import Menubar2 from "./Menubar2";
import DasboardViewProduct from "./DasboardViewProduct";
import { useNavigate } from "react-router-dom";

const Dashboard1 = () => {

const navigate= useNavigate();



  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  const navigatetoDasboardViewProduct=()=>{
    navigate('/dasboard-view-product');
};

  return (
    <>
      <div className=" flex">
        <div>
          <Menubar2 />
        </div>
        <div className="dashboard-layout font-bold flex">
          Dashboard
          <div className="datepicker-container flex  gap-x-8">
            <input type="date" id="birthday" name="birthday" />
            <input type="date" id="birthday" name="birthday" />
            <button className="viewProductbtn" onClick={navigatetoDasboardViewProduct}>View Product</button>
          </div>

          
          <div className="menu-products1 flex  grid-cols-4 space-x-8 divide-x">
            <div className="products flex space-x-4  bg-neutral-100">
              <img
                className="  w-20 h-20"
                src="/images/Heart1.png"
                alt=""
              ></img>
              <p className=" font-black text-[20px]  w-64 h-20 grid grid-cols-1 divide-y  leading-[3rem] ">
                178+
                <br />
                <span className=" font-thin text-[14px]">Save Products</span>
              </p>
            </div>

            <div className=" products flex space-x-4  bg-neutral-100">
              <img className="  w-20 h-20" src="/images/Icon1.png" alt=""></img>
              <p className="flex font-black text-[20px] w-53 h-20 grid grid-cols-1 divide-y leading-[3rem]  ">
                20+
                <span className=" font-thin text-[14px]">Stock Products</span>
              </p>
            </div>

            <div className=" products flex space-x-4  bg-neutral-100">
              <img className="  w-20 h-20" src="/images/Incon.png" alt=""></img>
              <p className="flex font-black text-[20px] w-53 h-20 grid grid-cols-1 divide-y leading-[3rem]  ">
                190+
                <span className=" font-thin text-[14px]">Sales Products</span>
              </p>
            </div>

            <div className=" products flex space-x-4  bg-neutral-100">
              <img className="  w-20 h-20" src="/images/Icon2.png" alt=""></img>
              <p className="flex font-black text-[20px] w-53 h-20 grid grid-cols-1 divide-y leading-[3rem]  ">
                12+
                <span className=" font-thin text-[14px]">Job Application</span>
              </p>
            </div>
          </div>
          {/* report */}
          <div className="dashboard-report-container ">
            <div className="report-row ">
              <img
                className=" reportImg"
                src="/images/Reports.png"
                alt=""
              ></img>
            </div>
          </div>
          {/* analytics */}
          <div className="dashboard-analytics-container">
            <div className="analytics"></div>
            <img
              className=" analyticsImg"
              src="/images/AnalyticsReport.png"
              alt=""
            ></img>
          </div>
          {/* Recent Orders table */}
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
          
          {/* Top selling Products */}
          <div className="topsellingproduct-container ">
            <p className=" space-y-4">Top selling Products</p>
            <div className="products1 ml-4 mt-2">
              <div className=" flex  text-left space-x-8  space-y-4  bg-neutral-100 ">
                <img
                  className=" mt-2 ml-2 w-20 h-20"
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
                  className="ml-4 w-20 h-20"
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

            {/* <div className="topsellingproduct"></div> */}
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard1;
