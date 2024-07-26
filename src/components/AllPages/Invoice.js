import React from 'react'
import InvoiceTableData from './InvoiceTableData';
import Menubar2 from "./Menubar2";
import "./Invoice.css"
import { useNavigate } from 'react-router-dom';

const Invoice = () => {

  const navigate = useNavigate();
const navigateToInvoiceCreateNew=()=>{
  navigate('/invoice-create-new')
}


  const invoiceArr = [
    {
      id: 1,
      Invoiceid: "#876364",
      name: "Arrora gaur",
      email: "arroragaur@gmail.com",
      Date: "",
      status: "Complete",
      textcolor:"#3A974C",
      bgcolor:"#AFE1AF",
      src: "./images/Image1.png",
      star: "./images/Star2.png",
      calender: "./images/Calendar2.png",
      message: "./images/Message(2).png",
      
    },
    {
      id: 10,
      Invoiceid: "#876364",
      name: "James Mullican" + "   ",
      email: "jamesmullican@gmail.com" + "   ",
      Date: "",
      status: "Pending",
      textcolor:"#3A974C",
      bgcolor:"#F29339",
      src: "./images/Image2.png",
      star: "./images/Star2.png",
      calender: "./images/Calendar2.png",
      message: "./images/Message(2).png",
    },
    {
      id: 3,
      Invoiceid: "#876364",
      name: "Robert Bacins" + "   ",
      email: "robertbacins@gmail.com" + "   ",
      Date: "",
      status: "Complete",
      textcolor:"#3A974C",
      bgcolor:"#AFE1AF",
      src: "./images/Image4.png",
      star: "./images/Star1.png",
      calender: "./images/Calendar2.png",
      message: "./images/Message(2).png",
    },
    {
      id: 4,
      Invoiceid: "#876364",
      name: "Bethany Jackson" + "   ",
      email: "bethanyjackson@gmail.com" + "   ",
      Date: "",
      status: "Cancel",
      textcolor:"#FF0000",
      bgcolor:"#FAA0A0",
      src: "./images/Image5.png",
      star: "./images/Star1.png",
      calender: "./images/Calendar2.png",
      message: "./images/Message(2).png",
    },
    {
      id: 5,
      Invoiceid: "#876364",
      name: "Anne Jacob" + "   ",
      email: "annejacob@gmail.com" + "   ",
      Date: "",
      status: "Complete",
      textcolor:"#3A974C",
      bgcolor:"#AFE1AF",
      src: "./images/Image6.png",
      star: "./images/Star1.png",
      calender: "./images/Calendar2.png",
      message: "./images/Message(2).png",
    },
    {
      id: 6,
      Invoiceid: "#876364",
      name: "Bethany jackson" + "   ",
      email: "bethanyjackson@gmail.com" + "   ",
      Date: "",
      status: "Complete",
      textcolor:"#3A974C",
      bgcolor:"#AFE1AF",
      src: "./images/Image7.png",
      star: "./images/Star2.png",
      calender: "./images/Calendar2.png",
      message: "./images/Message(2).png",
    },

    {
      id: 7,
      Invoiceid: "#876364",
      name: "James Mullican" + "   ",
      email: "jamesmullican@gmail.com" + "   ",
      Date: "",
      status: "Pending",
      
      textcolor:"#3A974C",
      bgcolor:"#F29339",
      src: "./images/Image8.png",
      star: "./images/Star2.png",
      calender: "./images/Calendar2.png",
      message: "./images/Message(2).png",
    },
    {
      id: 8,
      Invoiceid: "#876364",
      name: "Jhon Deo" + "   ",
      email: "jhondeo32@gmail.com" + "   ",
      Date: "",
      status: "Complete",
      textcolor:"#3A974C",
      bgcolor:"#AFE1AF",
      src: "./images/Image9.png",
      star: "./images/Star1.png",
      calender: "./images/Calendar2.png",
      message: "./images/Message(2).png",
    },
    {
      id: 9,
      Invoiceid:  "#876364",
      name: "Bethany jackson" + "   ",
      email: "bethanyjackson@gmail.com" + "   ",
      Date: "",
      status: "Cancel", 
      textcolor:"#FF0000",
      bgcolor:"#FAA0A0",

      src: "./images/Image10.png",
      star: "./images/Star2.png",
      calender: "./images/Calendar2.png",
      message: "./images/Message(2).png",
    },
    {
      id: 2,
      Invoiceid: "#876364",
      name: "James Mullican" + "   ",
      email: "jamesmullican@gmail.com" + "   ",
      Date: "",
      status: "Pending",
      
      textcolor:"#3A974C",
      bgcolor:"#F29339",
      src: "./images/Image11.png",
      star: "./images/Star1.png",
      calender: "./images/Calendar2.png",
      message: "./images/Message(2).png",
    },
  ];



  return (
    <>
    <div className='flex'><div><Menubar2/></div>
      
       <div className="invoice-Container1">
        {/* header */}
        <div className="  flex flex-row grid grid-cols-3">
          <div className=" flex font-bold ">Invoice List</div>
          <div className='search'>
            
            </div>
          <div className='addNewBtn flex '>
          <input type='text' placeholder='search...' className='rounded-lg font-thin text-[12px]'></input>
          <button type="submit"><i class="fa fa-search"></i></button>
            <button id="toggleButton"
              className="toggleButton1 static font-thin  bg-sky-400 hover:bg-sky-500 rounded-lg text-white text-center   gap-8" onClick={navigateToInvoiceCreateNew}>
                 + Add New   </button>      
            
           
          </div>
        </div>

        {/* body Dropdownlist */}

        <div className="header-dropdown-data flex  text-[13px] grid grid-cols-10  text-left">
          <div className="dropdown col-span-1">
            <button className="dropbtnss text-[13px] ">
              Invoice Id
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content text-[10px] hover:bg-sky-400 text-sky-600 divide-y divide-slate-200">
              <a href="#" className='divide-y '>Id 1</a>
              <a href="#">Id 2</a>
            </div>
          </div>

          <div className="dropdown col-span-2">
            <button className="dropbtnss1 text-[13px] ">
              Name
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content text-[10px] hover:bg-sky-600 text-sky-400">
              <a href="#">First Name</a>
              <a href="#">Last Name</a>
            </div>
          </div>

          <div className="dropdown col-span-3">
            <button className="dropbtnss2 text-[13px] text-right">
              Email
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content items-center text-[10px] hover:bg-sky-600 text-sky-400">
              <a href="#">Email 1</a>
              <a href="#">Email 2</a>
            </div>
          </div>

          <div className="dropdown ">
            <button className="dropbtss3">
              Date
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content text-[10px] hover:bg-sky-600 text-sky-400">
              <a href="#">Date1</a>
              <a href="#">Date 2</a>
            </div>
          </div>

          <div className="dropdown col-span-2">
            <button className="dropbtnss4 text-left">
              Status
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content text-[10px] hover:bg-sky-600 text-sky-400">
              <a href="#" className="">Completed</a>
              <a href="#">Pending</a>
              <a href="#">Cancel</a>
            </div>
          </div>

          <div>
            <img src='./images/DeleteData.png'>
            </img>
          </div>
        </div>

        {/* employee table data */}

        <div className="user-data-table flex font-sm">
          <InvoiceTableData invoiceArr={invoiceArr}/>
        </div>
      </div>
    
      </div>
    </>
  )
}

export default Invoice