
import React, { useState } from 'react'
import "./DasboardViewProduct.css"
import Menubar2 from "./Menubar2";
import DashboardAddNewProduct from './DashboardAddNewProduct';
import DasboardSellingImg from './DasboardSellingImg';

const DasboardViewProduct = () => {
    const [user,setUser]=useState(<DasboardSellingImg/>);
    //const navigate = useNavigate();
    
   const handleclick=()=>{
    setUser(!user);
   };

  return (
    <>
    <div className=" flex">
      <div>
        <Menubar2 />
      </div>
      <div className="dashboard-layout1 font-bold flex">
        <div>
        Product Analytics
        <div className="datepicker-container1 flex  gap-x-8">
          <input type="date" id="birthday" name="birthday" />
          <input type="date" id="birthday" name="birthday" />
          
        </div>
        </div>

        <div className='flex'>
        <div className="AllBtn-container flex gap-4 ">
        <button className="Productbtn1" > Product</button>
        <button className="customerbtn" >Customer</button>
          <button className="AddProductbtn " onClick={handleclick} >+Add Product</button>{user ?<DashboardAddNewProduct/>:<DasboardSellingImg/> }
        </div>
        </div>

        
        
        

        <div className='dashboard-lower-container flex'>


        {/* left container */}
        <div className=" dashboard-left-container">
          <div className="report-row flex gap-2 ">
            <img
              className=" totalproductImg"
              src="/images/Product.png"
              alt=""
            ></img>
            <img
            className=" totalsalesImg"
            src="/images/sales.png"
            alt=""
          ></img>
          </div>
                {/* top selling products */}
          <div className="topsellingproduct-container1 flex">
          <div><p>Top Selling Products</p>

          <div className="topsellingproduct-ordertable flex">
             <table className="Full-table1  ">
              <thead>
                <tr>
                  <th>
                    <div className="dropdown">
                      <button className="dropbtn">
                        SN
                        <i className="fa fa-caret-down"></i>
                      </button>
                      <div className="dropdown-content text-white">
                        <a href="#">SN No</a>
                        <a href="#">SN No</a>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="dropdown">
                      <button className="dropbtn">
                         Name
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
                        <a href="#">Price1</a>
                        <a href="#">Price2</a>
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
                      <p className="dropbtn">Total Sales </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="tbody border-separate border-spacing-2 border border-slate-400">
                <tr>
                <td><img
                      className="ImagePrduct w-4 h-4"
                      src="/images/Position.png"
                    /></td>
                  <td className="flex gap-2">
                    <img
                      className="ImagePrduct  flex-cols-2 w-8 h-8"
                      src="/images/image.png"
                    />
                    <span className="pb-2">Blutooth Devices</span>
                  </td>
                  <td>$10</td>
                  <td >34,666 Piece </td>
                  <td className=" text-green-600  w-3 h-2">$3,46,660</td>
                </tr>
                <tr>
                <td><img
                      className="ImagePrduct w-4 h-4"
                      src="/images/Position.png"
                    /></td>
                  <td className="flex gap-2">
                    <img
                      className="ImagePrduct w-5 h-5"
                      src="/images/image (1).png"
                    />
                    <p>Airdot</p>
                  </td>
                  <td>$10</td>
                  <td >34,666 Piece </td>
                  <td className=" text-green-600  w-3 h-2">$3,46,660</td>
                </tr>
                <tr>
                <td><img
                      className="ImagePrduct w-4 h-4"
                      src="/images/Position.png"
                    /></td>
                  <td className="flex gap-2">
                    <img
                      className="ImagePrduct w-5 h-5"
                      src="/images/image (3).png"
                    />
                    <p>shoes</p>
                  </td>
                  <td>$10</td>
                  <td >34,666 Piece </td>
                  <td className=" text-green-600  w-3 h-2">$3,46,660</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td className="flex gap-2">
                    <img
                      className="ImagePrduct w-5 h-5"
                      src="/images/image (4).png"
                    />
                    <p>Kids T-Shirt</p>
                  </td>
                  <td>$10</td>
                  <td >34,666 Piece </td>
                  <td className=" text-green-600  w-3 h-2">$3,46,660</td>
                </tr>

                <tr>
                  <td>5</td>
                  <td className="flex gap-2">
                    <img
                      className="ImagePrduct w-5 h-5 bg-center"
                      src="/images/image (5).png"
                    />
                    <p>Smart Watch</p>
                  </td>
                  <td>$10</td>
                  <td >34,666 Piece </td>
                  <td className=" text-green-600  w-3 h-2">$3,46,660</td>
                </tr>

                <tr>
                  <td className='text-center '>6</td>
                  <td className="flex gap-2">
                    <img
                      className="ImagePrduct w-5 h-5"
                      src="/images/image (6).png"
                    />
                    <p>Girls Top</p>
                  </td>
                  <td>$10</td>
                  <td >34,666 Piece </td>
                  <td className=" text-green-600  w-3 h-2">$3,46,660</td>
                </tr>
              </tbody>
            </table> 
          </div>
          </div>
        
        
        

        </div>
        </div>
        {/* right container */}
        {/* <div className="topselling-right-container  ">
          <div className="topselling-right1 mt-2"><img src='./images/product add by month.png'></img></div>
          <div className="topselling-right2"><img src='./images/sales analytics.png'></img></div>
          
        </div> */}
        </div>
        
        
      </div>
    </div>
  </>
  )
}

export default DasboardViewProduct