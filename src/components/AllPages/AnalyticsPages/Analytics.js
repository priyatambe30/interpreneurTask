import React, { useState } from "react";
import "./Analytics.css";
import AllUserInfo from "./AllUserInfo";
import AddCustomer from "./AddCustomer";
import UserData from "./UserData";
// import images from './public/images'

const Analytics = () => {

   const [user,setUser]=useState(<UserData/>);

   const handleclick=()=>{
    setUser(!user);

   };
  const userArr = [
    {
      id: 1,
      name: "John Deo",
      email: "johndoe2211@gmail.com",
      phone: "+33757005467",
      gender: "male",
      src: "./images/Image1.png",
      color:"#FF5733",
    },
    {
      id: 10,
      name: "Shelby Goode" + "   ",
      email: "shelbygoode481@gmail.com" + "   ",
      phone: "++33757005467" + "   ",
      gender: "female" + "   ",
      src: "./images/Image11.png" + "   ",
    },
    {
      id: 3,
      name: "John Deo" + "   ",
      email: "jhondeo24823@.com" + "   ",
      phone: "++63475700546" + "   ",
      gender: "male" + "   ",
      src: "./images/Image3.png" + "   ",
    },
    {
      id: 4,
      name: "Mark Ruffalo" + "   ",
      email: "markruffalo3735@.com" + "   ",
      phone: "++33757005467" + "   ",
      gender: "male" + "   ",
      src: "./images/Image4.png" + "   ",
    },
    {
      id: 5,
      name: "Bethany Jackson" + "   ",
      email: "bethanyjackson5@.com" + "   ",
      phone: "++33757005467" + "   ",
      gender: "female" + "   ",
      src: "./images/Image5.png" + "   ",
    },
    {
      id: 6,
      name: "Christine Huston" + "   ",
      email: "christinehuston4@.com" + "   ",
      phone: "+33757005467",
      gender: "male",
      src: "./images/Image7.png" + "   ",
    },

    {
      id: 7,
      name: "Anne Jacob" + "   ",
      email: "annejacob2@ummoh.com" + "   ",
      phone: "++33757005467" + "   ",
      gender: "male" + "   ",
      src: "./images/Image8.png" + "   ",
    },
    {
      id: 8,
      name: "James Mullican" + "   ",
      email: "jamesmullican5346@.com" + "   ",
      phone: "++33757005467" + "   ",
      gender: "male" + "   ",
      src: "./images/Image9.png" + "   ",
    },
    {
      id: 9,
      name: "Robert Bacins" + "   ",
      email: "robertbacins4182@.com" + "   ",
      phone: "++33757005467" + "   ",
      gender: "male" + "   ",
      src: "./images/Image10.png" + "   ",
    },
    {
      id: 2,
      name: "John Carilo" + "   ",
      email: "john carilo182@.com" + "   ",
      phone: "++33757805467" + "   ",
      gender: "male" + "   ",
      src: "./images/Image2.png" + "   ",
    },
  ];

  // function addcustomer() {
  //   var x = document.getElementById("addcustomer");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }
  return (
    <>
      <div className="Analytics-Container  ">
        {/* header */}
        <div className="  flex flex-row">
          <div className=" flex font-bold ">Customer List</div>
          <div>
            <button
              className="addcustBtn font-thin  bg-sky-400 hover:bg-sky-500 rounded-lg text-black text-center w-40 h-10  gap-8"
              onClick={handleclick}> + Add Customer
              {user ?<UserData/>: <AddCustomer/>}
            
              
            </button>
            {/* {user ||(<div>
              <AddCustomer/>
              <UserData/>
            </div>)} */}
          </div>
        </div>

        {/* body Dropdownlist */}

        <div className="flex  text-[13px] grid grid-cols-7  text-left">
          <div className="dropdown col-span-1">
            <button className="dropbtn1 text-[13px] ">
              Name
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content text-[10px] hover:bg-sky-200 text-sky-400">
              <a href="#">First Name</a>
              <a href="#">Last Name</a>
            </div>
          </div>

          <div className="dropdown col-span-3">
            <button className="dropbtn2 text-[13px] text-right">
              Email
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content text-[13px] hover:bg-sky-200 text-sky-400">
              <a href="#">Email 1</a>
              <a href="#">Email 2</a>
            </div>
          </div>

          <div className="dropdown ">
            <button className="dropbt3">
              Phone Number
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content text-[10px] hover:bg-sky-200 text-sky-400">
              <a href="#">Phone 1</a>
              <a href="#">Phone 2</a>
            </div>
          </div>

          <div className="dropdown col-span-2">
            <button className="dropbtn4 text-left">
              Gender
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content text-[10px] hover:bg-sky-200 text-sky-400">
              <a href="#">Male</a>
              <a href="#">Female</a>
            </div>
          </div>
        </div>

        {/* employee table data */}

        <div className="flex font-sm">
          <AllUserInfo userArr={userArr} />
        </div>
      </div>
      {/* UserInfo */}

      

      {/* Add Customer */}
      {/* <div id="addcustomer" className="addcustomer">
        <AddCustomer />
      </div> */}
    </>
  );
};

export default Analytics;
