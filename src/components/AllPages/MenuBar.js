import React from 'react'
import ImagesArray from './ImagesArray';


function MenuBar({btnArr}) {
    const buttonContent=btnArr.map((bt)=>{
        return(
            <button key={bt.id} className=" buttonContent flex  space-x-24  divide-x flex bg-gray text-black hover:text-blue-500"
             onClick={bt.btFun}>{bt.label}</button>
            
        )

    });

  
  return (
    <>
    <div className="buttonContent ">
            {/* <ImagesArray/> */}
        <div className="buttonContent">
        {buttonContent}
        </div>
        
      </div>
      
    

    
    </>
  )
}

export default MenuBar;