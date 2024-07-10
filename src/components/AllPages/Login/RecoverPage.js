import React from 'react'
import "./RecoverPage.css"

const RecoverPage = () => {
  return (
    <>
      <div className='RecoverPage-container'>
          <div className='Inner-RecoverPage-container'>
            <div>
              <img className='logoImage' src='./images/Logo.png'></img>
            </div>
            <div className='recoverText'>
              <h4>Recover</h4>
            </div>
            <div className='emailInfo grid '>
              <label className=''>Email Address </label>
              <input className='gap-2 rounded-lg h-8 text-[13px]' type='text' placeholder='example@gmail.com'></input><br/><br/>
              <button className=' resetyourpass gap-6' type='submit'>Reset Your Password</button>
            </div>

          </div>
      </div>
    </>
  )
}

export default RecoverPage;