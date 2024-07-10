
import React from 'react'
import "./AccountConfirm.css"
import { useNavigate } from 'react-router-dom'

const AccountConfirm = () => {
  const navigate = useNavigate();

  const navigateToMenubar2=()=>{
    navigate('/dashboard1');
  };
  return (
    <>
      <div className='AccountConfirm-container'>
          <div className='Inner-AccountConfirm-container'>
            <div className='logoimages'>
              <img className='logoImage1' src='./images/bg (1).png'></img>
              <img className='logoImage2' src='./images/Illustration (2).png'></img>
              <img className='logoImage3' src='./images/thumbs up.png'></img>
            </div>
            <div className='accountcreatedText'>
              <h4>Your account successfully created.</h4>
            </div>
            <div className='GoToHome grid '>
              
              <button className=' GoToHomebtn gap-6' type='submit' onClick={navigateToMenubar2}>Go To Home</button>
            </div>

          </div>
      </div>
    </>
  )
}

export default AccountConfirm;