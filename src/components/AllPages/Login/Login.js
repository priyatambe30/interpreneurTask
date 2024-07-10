
import React from 'react'
import './Login.css'
import LoginPage from './LoginPage'
import { Route, Router, Routes } from 'react-router-dom'
import Dashboard1 from '../Dashboard1'
import RecoverPage from './RecoverPage'
import AccountConfirm from './AccountConfirm'

const Login = () => {
  return (
    <>
    <div className='login-container flex'>
      
      <div className='inner-login-container'>
      <LoginPage/>
      </div>
      <div className='right-login-container'>
        <img className='image-container' src='./images/LoginImage.png'></img>

      </div>
      </div>
      
        {/* <Router>  */}
          {/* <div className="">
          <Routes>
          <Route  path="/" element={<Login/>}></Route>
          <Route  path="/Login-Page" element={<LoginPage/>}></Route>
          <Route  path="/dashboard1" element={<Dashboard1/>}></Route>
              <Route path="/recover-page" element={<RecoverPage/>}></Route>
              <Route path="/account-confirm" element={<AccountConfirm/>}></Route>
              
          </Routes>   
          </div>   
             */}

         {/* </Router> */}

      
      </>
  )
}

export default Login