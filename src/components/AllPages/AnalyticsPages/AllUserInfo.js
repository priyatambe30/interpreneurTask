import React from 'react'



  function AllUserInfo({userArr}) {
    const lableContent=userArr.map((bt)=>{
        return(
          
            
            // <label key={bt.id} className="text-[12px] space-x-12 items-left grid grid-cols-7   pt-2  divide-x  text-black hover:bg-sky-100 hover:text-blue-500 bg-slate-100">
              <label key={bt.id} className="text-[12px] flex flex-wrap  grid grid-cols-7 text-left content-center gap-8   pt-2  text-black hover:bg-sky-100 hover:text-blue-500 bg-slate-100">
              <img className='flex space-x-4 rounded-full text-left' src={bt.src}></img>
             
              <div className="h-10 w-18 text-left ">{bt.name}</div>
              <div className="flex col-span-2  h-8 w-40 text-left">{bt.email}</div>
              <div className="flex  h-8 w-18 text-left">{bt.phone}</div>
              <div className="gender1 h-8 w-18 text-right  ">
                
                  <label className=' ' >
                    <span className='span-gender-color  rounded-ml font-thin p-3 rounded-lg' style={{ backgroundColor: bt.color }}>{bt.gender}</span>
                    <span className=''  style={{ color: bt.textcolor }}>

                    </span>
                    </label></div>

              <div className="flex space-x-8 text-[10px] text-right">
              <div className="dropdown">
                <button className='font-bold buttondropdown text-right '>...                         
              </button>
              <div className="dropdown-content flex items-center">
              <a className='edit text-violet-700  bg-sky-300 w-40 h-10 hover:bg-sky-400 ' href="#"><i class="fa fa-edit text-violet-700"></i> Edit </a>
              {/* <img className='' src='./images/Edit.png'></img>Edit</a> */}

              
              
              <a className=' delete text-black text-rose bg-rose-300 hover:bg-sky-400 w-40 h-10 items-center object-cover' href="#">
                <i class="fa fa-trash text-rose-700"></i> Delete </a>
              {/* <img className='' src='./images/Delete.png'></img> Delete</a> */}
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