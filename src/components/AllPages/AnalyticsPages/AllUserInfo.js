import React from 'react'



  function AllUserInfo({userArr}) {
    const lableContent=userArr.map((bt)=>{
        return(
          
            
            // <label key={bt.id} className="text-[12px] space-x-12 items-left grid grid-cols-7   pt-2  divide-x  text-black hover:bg-sky-100 hover:text-blue-500 bg-slate-100">
              <label key={bt.id} className="text-[12px] flex flex-wrap  grid grid-cols-7 text-left content-center gap-8   pt-2  text-black hover:bg-sky-100 hover:text-blue-500 bg-slate-100">
              <img className='flex space-x-4 rounded-full text-left' src={bt.src}></img>
             
              <div className="h-8 w-18 text-left ">{bt.name}</div>
              <div className="flex col-span-2  h-8 w-40 text-left">{bt.email}</div>
              <div className="flex  h-8 w-18 text-left">{bt.phone}</div>
              <div className="h-8 w-12 text-right  ">{bt.gender}<span style={{ backgroundColor: bt.color }}></span></div>

              <div className="flex space-x-8 text-[10px] text-right">
              <div className="dropdown">
                <button className='font-bold buttondropdown '>...                         
              </button>
              <div className="dropdown-content flex items-center grid-cols-1">
              <a className='edit text-violet-600  bg-sky-200 ' href="#">
              <img className='' src='./images/Edit.png'></img>Edit</a>
              
              <a className=' delete  text-rose-500 bg-rose-200 items-center object-cover' href="#">
              <img className='' src='./images/Delete.png'></img> Delete</a>
                                      </div>
                                      </div>
                                      </div>
             
              
              
              
              </label>
            
        )

    });
  

  return (
    <>
      <div className="lblUserData  font-thin grid divide-x-2  grid-flow-rows gap-8 gap-x-8  ">{lableContent}</div>
      

    </>
    
    
  )
}


export default AllUserInfo