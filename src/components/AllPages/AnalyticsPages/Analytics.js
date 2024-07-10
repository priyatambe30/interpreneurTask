import React, { useState } from "react";
import "./Analytics.css";
import AllUserInfo from "./AllUserInfo";
import AddCustomer from "./AddCustomer";
import UserData from "./UserData";
import Menubar2 from "../Menubar2";
import { useNavigate } from "react-router-dom";

// import images from './public/images'

const Analytics = () => {

   const [user,setUser]=useState(<UserData/>);
    const navigate = useNavigate();
    
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
      color:"#e5e5ff",
      textcolor:" #3232ff",
    },
    {
      id: 10,
      name: "Shelby Goode" + "   ",
      email: "shelbygoode481@gmail.com" + "   ",
      phone: "++33757005467" + "   ",
      gender: "female" + "   ",
      src: "./images/Image11.png" + "   ",
      color: "#FFE4B3",
      textcolor:" #FF8F6B",

    },
    {
      id: 3,
      name: "John Deo" + "   ",
      email: "jhondeo24823@.com" + "   ",
      phone: "++63475700546" + "   ",
      gender: "male" + "   ",
      color:"#e5e5ff",
      textcolor:" #3232ff",
      src: "./images/Image3.png" + "   ",
    },
    {
      id: 4,
      name: "Mark Ruffalo" + "   ",
      email: "markruffalo3735@.com" + "   ",
      phone: "++33757005467" + "   ",
      gender: "male" + "   ",
      src: "./images/Image4.png" + "   ",
      color:"#e5e5ff",
      textcolor:" #3232ff",
    },
    {
      id: 5,
      name: "Bethany Jackson" + "   ",
      email: "bethanyjackson5@.com" + "   ",
      phone: "++33757005467" + "   ",
      gender: "female" + "   ",
      color: "#FFE4B3",
      textcolor:" #FF8F6B",

      src: "./images/Image5.png" + "   ",
    },
    {
      id: 6,
      name: "Christine Huston" + "   ",
      email: "christinehuston4@.com" + "   ",
      phone: "+33757005467",
      gender: "male",
      color:"#e5e5ff",
      textcolor:" #3232ff",
      src: "./images/Image7.png" + "   ",
    },

    {
      id: 7,
      name: "Anne Jacob" + "   ",
      email: "annejacob2@ummoh.com" + "   ",
      phone: "++33757005467" + "   ",
      gender: "male" + "   ",
      color:"#e5e5ff",
      textcolor:" #3232ff",
      src: "./images/Image8.png" + "   ",
    },
    {
      id: 8,
      name: "James Mullican" + "   ",
      email: "jamesmullican5346@.com" + "   ",
      phone: "++33757005467" + "   ",
      gender: "male" + "   ",
      color:"#e5e5ff",
      textcolor:" #3232ff",
      src: "./images/Image9.png" + "   ",
    },
    {
      id: 9,
      name: "Robert Bacins" + "   ",
      email: "robertbacins4182@.com" + "   ",
      phone: "++33757005467" + "   ",
      gender: "male" + "   ",
      color:"#e5e5ff",
      textcolor:" #3232ff",
      src: "./images/Image10.png" + "   ",
    },
    {
      id: 2,
      name: "John Carilo" + "   ",
      email: "john carilo182@.com" + "   ",
      phone: "++33757805467" + "   ",
      gender: "male" + "   ",
      color:"#e5e5ff",
      textcolor:" #3232ff",
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
      <div className="flex">
        <div><Menubar2/></div>
      <div className="Analytics-Container  ">
      
        {/* header */}
        <div className="  flex flex-row">
          <div className=" flex font-bold ">Customer List</div>
          <div>
            <button id="toggleButton"
              className="addcustBtn static font-thin  bg-sky-400 hover:bg-sky-500 rounded-lg text-black text-center w-40 h-10  gap-8"
              onClick={handleclick}> + Add Customer
              
              
            </button>
            {user ?<AddCustomer/>:<UserData/> }

            
            
          </div>
        </div>

        {/* body Dropdownlist */}

        <div className="flex  text-[13px] grid grid-cols-7  text-left">
          <div className="dropdown col-span-1">
            <button className="dropbtn1 text-[13px] ">
              Name
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content text-[10px] hover:bg-sky-600 text-sky-400">
              <a href="#">First Name</a>
              <a href="#">Last Name</a>
            </div>
          </div>

          <div className="dropdown col-span-3">
            <button className="dropbtn2 text-[13px] text-right">
              Email
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content items-center text-[10px] hover:bg-sky-600 text-sky-400">
              <a href="#">Email 1</a>
              <a href="#">Email 2</a>
            </div>
          </div>

          <div className="dropdown ">
            <button className="dropbt3">
              Phone Number
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content text-[10px] hover:bg-sky-600 text-sky-400">
              <a href="#">Phone 1</a>
              <a href="#">Phone 2</a>
            </div>
          </div>

          <div className="dropdown col-span-2">
            <button className="dropbtn4 text-left">
              Gender
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content text-[10px] hover:bg-sky-600 text-sky-400">
              <a href="#" className="">Male</a>
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

</div>
    </>
  );
};

export default Analytics;
