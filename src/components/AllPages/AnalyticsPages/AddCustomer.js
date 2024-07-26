
import React, { useState } from "react";

import UserData from "./UserData";
// import React from 'react'
import './AddCustomer.css'
const AddCustomer = () => {
  // var selectedVal= $('#gender option:selected').val('male,female')
  // return selectedVal;
// var user ={userGender:selectedVal};

// const [user,setUser]=useState(<AddCustomer/>);

//    const handleclick=()=>{
//     setUser(!user);

//    };

  return (
    <>
    <div className="addcustomer-container">
        <div className='addcustomer flex '>
              <h1 className='AddCustomer'>Add Customer</h1>
              <img className='closebtn w-10 h-10' src='./images/close.png' ></img>
        </div>
        {/* {user ?<UserData/> :<AddCustomer/>} */}
        

          <div className="UserProf">
              
                <div className="User ">
                  <img className="cameraImg w-30 h-30" src="./images/camera1.png"></img>
                  </div>


                  <div className='userForm3 grid border border-2 '>
                    {/* <form action='grid gap-4'> */}
                    <div className='grid gap-2 '>
                    <label className='text-left text-[12px] '>First Name</label>
                    <input className=' text-[10px] bg-slate-100 w-80 h-10 rounded-full pl-4' placeholder='John' ></input>
                  </div>

                  <div className='grid gap-2 '>
                    <label className='text-left text-[12px] grid gap-3'>Last Name</label>
                    <input className=' text-[10px] bg-slate-100 w-80 h-10 rounded-full pl-4' placeholder='Deo' ></input>
                  </div>

                  <div className='grid gap-2 '>
                    <label className='text-left text-[12px] grid gap-3'>Email</label>
                    <input className=' text-[10px] bg-slate-100 w-80 h-10 rounded-full pl-4' placeholder='example@gmail.com' ></input>
                  </div>

                  <div className='grid gap-2 '>
                    <label className='text-left text-[12px] grid gap-3'>Phone No</label>
                    <input className=' text-[10px] bg-slate-100 w-80 h-10 rounded-full pl-4' placeholder='33757005467' ></input>
                  </div>

                  <div className=' grid'>
                    <label className='Gender3 text-left text-[12px] w-full h-10 '>Gender</label>
                    {/* <input className=' text-[10px] bg-slate-100 w-50 h-8' placeholder='John' ></input> */}
                    <div className='dropdown'>
                    

                    <select className='Gender3 text-left text-[12px] bg-slate-100 w-80 h-10 rounded-full' id='gender'>
                      <option className='male' value="male">Male</option>
                      <option className='female' value="female">Female</option>
                    </select>
                    </div>
                  </div>
                  <div>
                    <button type='button' className='submitcustomer3 font-thin hover:bg-sky-500'>Add Customer</button>
                    {/* <input type='submit' className=''></input> */}
                  </div>
                    {/* </form> */}
                  
                  </div>
                  
                
               

              

              

            </div>
    </div>
    </>
  )

}
export default AddCustomer;