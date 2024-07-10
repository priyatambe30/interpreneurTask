

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
            <img className='logo w-20 h-20 ' src='./images/Logo.png'></img>
            <p className='text-center font-bold'>Log in</p>
            </div>
            <div className='social-button flex grid grid-cols-2 gap-8 w-64 '>
                <div className=' flex space-x-2  bg-slate-100'>
                    <img className='sociallogoimage w-3 h-3' src='./images/GoogleLogo.png'></img>
                    <button className=''>
                        <a href='https://www.google.co.in/' target='_blanck'>Google  </a></button>
                        
                </div>
                
                <div className=' flex space-x-2  bg-slate-100'>
                    <img className='sociallogoimage w-2 h-3' src='./images/FacebookLogo.png'></img>
                    <button className=''>
                        <a href='https://www.facebook.com/' target='_blanck'>Facebook  </a></button>
                        
                </div>
                {/* <hr className='solid'></hr> */}
                <div className="divider">
      <span className="divider-text">Or</span>
    </div>
                
            </div>

            </div>


            {/* Login Details */}
            <div className='userLoginForm '>
                   
                    <div className='UserForm grid gap-2 '>
                    <label className='text-left text-[12px] grid gap-2'>Email Address</label>
                    <input className=' text-[10px] bg-slate-100 w-64 h-8 ' placeholder='example@gmail.com' ></input>
                    </div>

                  <div className='UserForm  grid gap-2'>
                    <label className='text-left text-[12px]'>Password</label>
                    <input type='password'id='psw' className=' text-[10px] bg-slate-100 w-64 h-8 grid gap-2' placeholder='passwors' ></input>
                    <img className='eyesymbool' src='./images/Hide.png' onClick={mufun}></img>
                  </div>  

                  <div className='checkboxData text-[12px] '>
                    <input type='checkbox' className='ckboxremember'></input>
                    <label className='rememberme'>Remember Me</label>
                    <button className='resetpass' onClick={navigatetoRecoverPage}>Reset Password?</button>
                    
                    </div>                
                  
                  <div>
                    <button type='button' className='submitcustomer font-thin hover:bg-sky-600 'onClick={navigatetoHome}>Log in</button>                    
                  </div>
                  <div className='bottomsection text-[12px] '>
                    
                    <label className='donthaveacc'>Don’t have account yet?  </label>
                    <button className='newacc text-sky-600' onClick={navigatetoSignUp}>New Account</button>
                    
                    </div> 
                  
              </div>
              </div>
            
        

      </div>
    </div>
    
    </>
  )
}

export default LoginPage