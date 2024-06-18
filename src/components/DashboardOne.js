import React from "react";
import './DashboardOne.css'
// import Chart from "./Chart";
// import AnalyticsReport from "./AnalyticsReport";
// import {catlog} from '.src/images/Category.png'
//import  './C:\Users\Lenovo\PRIYA\Hubnex Data\InterpreneurTask\interpreneur-task\src\font\Nunito'

const DashboardOne = () => {
  return (
    <>
      <div className="dashboard-layout flex flex-row  ">
        
      
                  <div className="menu flex flex-col gap-y-8 w-30 ">
                          <div className="flex w-20 h-30  space-x-4">
                            <img src="/images/Logo and company.png "></img>
                          </div>
                          <div className="base flex w-20 h-20 gap-y-8 space-x-4 flex-col ">
                            <table className="menu-table">
                              <tr className="tr-table">
                                <td className="td-table"><img className="menu-image"  src="/images/Category.png"></img> </td>
                                <td className="td-table"><button className="btn flex text-white">Dashboard</button></td>
                              </tr>

                              <tr className="tr-table">
                                <td className="td-table"><img className="menu-image" src="/images/Analytics.png"></img></td>
                                <td className="td-table"><button className="btn flex text-white">Aalytics</button></td>
                              </tr>

                              <tr className="tr-table">
                                <td className="td-table"><img className="menu-image" src="/images/Invoice.png"></img></td>
                                <td className="td-table"><button className="btn flex text-white">Invoice</button></td>
                              </tr>

                              <tr className="tr-table">                                
                                <td className="td-table"><img className="menu-image" src="/images/Calendar.png"></img></td>
                                <td className="td-table"><button className="btn flex text-white">Schedule</button></td>
                              </tr>

                              <tr className="tr-table">
                              <td className="td-table"><img className="menu-image" src="/images/Messages.png"></img></td>
                                <td className="td-table"><button className="btn flex text-white">Messages</button></td>
                                
                              </tr>

                              <tr className="tr-table">                                
                                <td className="td-table"><img className="menu-image" src="/images/Notification.png"></img></td>
                                <td className="td-table"><button className="btn flex text-white">Notification</button></td>
                              </tr>

                              <tr className="tr-table">
                              <td className="td-table"><img className="menu-image" src="/images/Settings.png"></img></td>
                                <td className="td-table"><button className="btn flex text-white">Settings </button></td>                               
                              </tr>

                              </table>
                            
                            </div>

                            <div className="profile flex flex-col gap-y-6">
                                <img className=" w-10 h-10"  src="/images/Profile photo.png" alt="profile photo"></img>
                                <img className=" w-8 h-8" src="/images/Logout.png" alt="logout icon" ></img>

                            </div>
                  </div>
                  <div className="Dashboard font-bold">Dashboard</div>

                  <div className="menu-products flex grid grid-cols-4 space-x-6 divide-x">

                    <div className="products flex space-x-4  bg-neutral-100">
                    <img className="  w-20 h-20"  src="/images/Heart1.png" alt=""></img>
                      <p className="flex font-black text-[25px]  w-53 h-30 grid grid-cols-1 divide-y leading-[3rem] ">178+
                      <span className=" font-thin text-[16px]">Save Products</span></p>                                           
                    </div>

                    <div className=" products flex space-x-4  bg-neutral-100">
                    <img className="  w-20 h-20"  src="/images/Icon1.png" alt=""></img>
                      <p className="flex font-black text-[25px] w-53 h-30 grid grid-cols-1 divide-y leading-[3rem]  ">20+
                      <span className=" font-thin text-[16px]">Stock Products</span></p>                                            
                    </div>

                    <div className=" products flex space-x-4  bg-neutral-100">
                    <img className="  w-20 h-20"  src="/images/Incon.png" alt=""></img>
                      <p className="flex font-black text-[25px] w-53 h-30 grid grid-cols-1 divide-y leading-[3rem]  ">190+
                      <span className=" font-thin text-[16px]">Sales Products</span></p>                                            
                    </div>

                    <div className=" products flex space-x-4  bg-neutral-100">
                    <img className="  w-20 h-20"  src="/images/Icon2.png" alt=""></img>
                      <p className="flex font-black text-[25px] w-53 h-30 grid grid-cols-1 divide-y leading-[3rem]  ">12+
                      <span className=" font-thin text-[16px]">Job Application</span></p>                                            
                    </div>

                  </div>


                  {/* report */}
                  <div className="report-container ">
                    <div className="report-row flex flex-row grid grid-cols-2 space-x-24  divide-x">
                      <p>Report</p>

                      <div className=" vector flex flex-row-reverse w-2 h-1" >
                      <img src="/images/Vector.png"></img>
                      <img src="/images/Vector.png"></img>
                      <img src="/images/Vector.png"></img>
                      </div>

                    </div>
                    
                  </div>

                  {/* analytics */}
                  <div className="analytics-container flex flex-row">
                    
                    <div className="analytics"></div>
                  </div>
                  
      </div>


      

      

                  
                 
    </>
  );
};

export default DashboardOne;
