

import React from 'react'

function InvoiceTableData({invoiceArr}){

    const invoiceComponent= invoiceArr.map((invoice)=>{
        return(
            <div className='table-container text-[12px] w-full text-black hover:bg-sky-100 hover:text-blue-500 bg-slate-100 gap-4'>
            
                <label key={invoice.id} className="text-[12px] flex   grid grid-cols-12 text-left content-center gap-8   pt-2  text-black hover:bg-sky-100 hover:text-blue-500 bg-slate-100">
                <input className='w-4 h-4' type='checkbox'></input>
                
                <label className='text-left'>{invoice.Invoiceid}</label>
              <img className='flex space-x-4 rounded-full text-left' src={invoice.src}></img>
             
              <div className="h-8 w-40 text-left  ">{invoice.name}</div>
              <div className='flex col-span-3 pl-8'> <img className='flex space-x-4 w-4 h-4 rounded-full text-left ' src={invoice.message}>
              </img>{invoice.email}</div>
             
              <div className='flex col-span-2'> <img className='flex space-x-4 w-4 h-4 rounded-full text-left' src={invoice.calender}>
              </img><input type='date'></input>{invoice.Date}</div>
              
              {/* <div className=" status1 h-8 w-12  text-left " style={{ background: 'green', color:'white'}}>{invoice.status}</div> */}
              <div className=" status1 h-8 w-12  text-left ">
              <span className='p-2 rounded-lg'  style={{ backgroundColor: invoice.bgcolor }}>{invoice.status}</span>
              <span className=''  style={{ textcolor: invoice.textcolor }}></span>
              
              </div>


              <div> <img className='flex space-x-4 rounded-full text-left' src={invoice.star}></img></div>
              <div className="flex space-x-8 text-[10px] text-right">
              <div className="dropdown">
                <button className='font-bold buttondropdown text-right '>...                         
              </button>
              <div className="dropdown-content flex items-center">
              <a className='edit text-violet-700  bg-sky-300 w-40 h-10 hover:bg-sky-400 ' href="#">
                <i class="fa fa-edit text-violet-700"></i> Edit </a>            
              
              
              <a className=' delete text-black text-rose bg-rose-300 hover:bg-sky-400 w-40 h-10 items-center object-cover' href="#">
                <i class="fa fa-trash text-rose-700"></i> Delete </a>
              
                                      </div>
                                      </div>
                                      </div>
             
              
              
              
              </label>
  

        {/* <table className='table-container table-fixed  w-[1050px]  bg-violet-600 flex grid-cols-9 text-left content-evenly '>
           
            <tr className=''>
                <td><input type="checkbox"></input></td>
                <td className=''>{invoice.Invoiceid}</td>
                <td className=''>{invoice.name}</td>
                
                <td><img className='flex space-x-4 rounded-full text-left' src={invoice.src}></img></td>
                <td><img className='flex space-x-4 rounded-full text-left' src={invoice.message}></img></td>
                <td className='grid-cols-2'>{invoice.email}</td>
                <td><img className='flex space-x-4 rounded-full text-left' src={invoice.calender}></img></td>
                <td><input type='date'></input></td>
                <td>{invoice.status}</td>
                <td><img className='flex space-x-4 rounded-full text-left' src={invoice.star}></img></td>
                <td>
                    <div>
                        <button>...</button>
                            <div className="dropdown-content flex items-center">
                        <a className='edit text-violet-700  bg-sky-300 w-40 h-10 hover:bg-sky-400 ' href="#">
                            <i class="fa fa-edit text-violet-700"></i> Edit </a>
                                    
                        
                        <a className=' delete text-black text-rose bg-rose-300 hover:bg-sky-400 w-40 h-10 items-center object-cover' href="#">
                            <i class="fa fa-trash text-rose-700"></i> Delete </a>
                            </div>
                    </div>
                </td>
            </tr>
        </table> */}
    </div>

        )

    });
  return (

    <>

<div className="invoiceComponent  font-thin grid divide-x-2  grid-flow-rows gap-12 gap-x-8  ">{invoiceComponent}</div>
    
    

    </>
  )
}

export default InvoiceTableData