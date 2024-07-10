import React from 'react'
import ImagesArray from './ImagesArray';

// function imgfun(){
//   var x = document.getElementById("btncontent");
// if (x.style.display === "none") {
// x.style.display = "block";
// } else {
// x.style.display = "none";
// }
// };


function MenuBar({btnArr}) {
    const buttonContent=btnArr.map((bt)=>{
        return(
            // <button key={bt.id} className=" buttonContent flex  space-x-24  divide-x flex bg-gray text-black hover:text-blue-500"
            //  onClick={bt.btFun}>{bt.label}</button>

            // <label key={bt.id} className=" buttonContent flex  space-x-24  divide-x flex bg-gray text-black hover:text-blue-500"onClick={bt.btFun}
            //  >
            //   <img>{bt.src}</img>
            // {bt.label}</label>

            // <input className=" buttonContent flex  space-x-24  divide-x flex bg-gray text-black hover:text-blue-500"><img>{bt.src}</img>
            // </input>



                <label key={bt.id} onClick={bt.btFun} className=" flex items-center  flex text-black hover:bg-sky-100 hover:text-blue-600 ">
                  <div>
                    <img className='flex  h-5 w-5  space-y-8 ' src={bt.src}></img>
                  </div>
                  {bt.label}
                </label>
                            
                        )

                    });
   
  
  return (
    <>
    <div className="buttonContent ">
            {/* <ImagesArray/> */}
        <div className="buttonContent" id='btncontent'>
        {buttonContent}
        </div>
        
      </div>
      
    

    
    </>
  )
}

export default MenuBar;