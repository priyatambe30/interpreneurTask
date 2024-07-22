

import React from 'react'
import {useNavigate} from 'react-router-dom'
import './LoginPage.css';
import RecoverPage from "./RecoverPage"
import SignUp from './SignUp';
import Menubar2 from '../Menubar2';

const LoginPage = () => {
    
    // const navigate= useNavigate();
    const navigate= useNavigate();

    const navigatetoSignUp=()=>{
        navigate('/sign-up');
    };

    // const navigatetoDashboard1=()=>{
    //     navigate('/dashboard1');
    // };
    const navigatetoHome=()=>{
      navigate('/dashboard1');
  };

    const navigatetoRecoverPage=()=>{
        navigate('/recover-page');
    };
    
    function mufun(){
        var x= document.getElementById("psw")
        if(x.type==="password"){
            x.type="text";

        } else{
            x.type="password";
        }

    }

  return (
    <>
<div className='main-login-container'>
<div className='Login-container'>
      <div className='Login-Inner-container'>
        <div className='loginformcontainer'>
        <div className='Login-Logo grid gap-8'>
            <img className='logo w-22 h-22 ' src='./images/Logo.png'></img>
            <p className='text-center font-bold text-[20px]'>Log in</p>
            </div>
            <div className='social-button flex grid grid-cols-2 gap-8 w-64 text-center rounded-full text-center'>
                <div className=' flex space-x-3  bg-slate-100 rounded-full text-center hover:bg-blue-200'>
                    <img className='sociallogoimage1 w-4 h-4' src='./images/GoogleLogo.png'></img>
                    <button className=' rounded-full text-center text-[16px] pl-6'>
                        <a href='https://www.google.co.in/' target='_blanck'>Google  </a></button>
                        
                </div>
                
                <div className=' flex space-x-3  bg-slate-100 rounded-full text-center hover:bg-blue-200 text-center'>
                    <img className='sociallogoimage1 w-2 h-4' src='./images/FacebookLogo.png'></img>
                    <button className='rounded-full text-center text-[16px] pl-6'>
                        <a href='https://www.facebook.com/' target='_blanck'>Facebook  </a></button>
                        
                </div>
                {/* <hr className='solid'></hr> */}
                <div className="divider1">
                <span className="divider1-text">----------</span>
      <span className="divider1-text">OR</span>
      <span className="divider1-text">------------</span>
    </div>
                
            </div>

            </div>


            {/* Login Details */}
            <div className='userLoginForm '>
                   
                    <div className='UserForm grid gap-2 '>
                    <label className='text-left text-[12px] grid'>Email Address</label>
                    <input className=' text-[10px] bg-slate-100 text-slate-200 w-full h-10  text-left pl-3 rounded-full'
                     placeholder='example@gmail.com' ></input>
                    </div>

                  <div className='UserForm  grid gap-4 pt-2'>
                    <label className='text-left text-[12px]'>Password</label>
                    <input type='password'id='psw' className=' text-[10px] text-slate-200 w-full grid gap-2 h-10 bg-slate-100 text-left pl-3
                     rounded-full' placeholder='passwors' ></input>
                    <img className='eyesymbool' src='./images/Hide.png' onClick={mufun}></img>
                  </div>  

                  <div className='checkboxData text-[12px] '>
                    <input type='checkbox' className='ckboxremember'></input>
                    <label className='rememberme'>Remember Me</label>
                    <button className='resetpass1' onClick={navigatetoRecoverPage}>Reset Password?</button>
                    
                    </div>                
                  
                  <div className='submitcustomer1 bg-sky-700 text-center text-white hover:bg-sky-500 hover:text-black' >
                    <button type='button' className="  font-bold text-[16px] "
                     onClick={navigatetoHome}>Log in</button> 
                                       
                  </div>

                  <div className='bottomsection1 text-[12px] '>
                    
                    <label className='donthaveacc1 '>Don’t have account yet?  </label>
                    <button className='newacc1 ' onClick={navigatetoSignUp}>New Account</button>
                    
                    </div> 
                  
              </div>
              </div>
            
        

      </div>
    </div>
    
    </>
  )
}

export default LoginPage