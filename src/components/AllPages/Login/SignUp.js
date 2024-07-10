

import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"

const SignUp = () => {
  const navigate = useNavigate();

  const navigateToLogin=()=>{
    navigate('/');
  };

    const navigateToAccountConfirm=()=>{
      navigate('/account-confirm');
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
<div className='main-signup-container'>


<div className='signup-container flex'>
      <div className='signup-Inner-container'>
        <div className='signup-Logo grid gap-8'>
            <img className='logo2 w-20 h-20 ' src='./images/Logo.png'></img>
            <p className='text-center font-bold'>Sign Up</p>
            </div>
            <div className='social-buttonss flex grid grid-cols-2 gap-8 w-64 '>
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
            


            {/* Login Details */}
            <div className='usersignupForm '>
                   

                    <div className='UserForm grid gap-2 '>
                    <label className='text-left text-[12px] grid gap-2'>Full Name</label>
                    <input className=' text-[10px] bg-slate-100 w-64 h-8 ' placeholder='Priya' ></input>
                    </div>
                    <div className='UserForm grid gap-2 '>
                    <label className='text-left text-[12px] grid gap-2'>Email Address</label>
                    <input className=' text-[10px] bg-slate-100 w-64 h-8 ' placeholder='priya@gmail.com' ></input>
                    </div>

                    <div className='UserForm grid gap-2 '>
                    <label className='text-left text-[12px] grid gap-2'>Username</label>
                    <input className=' text-[10px] bg-slate-100 w-64 h-8 ' placeholder='priyatambe30' ></input>
                    </div>

                  <div className='UserForm  grid gap-2'>
                    <label className='text-left text-[12px]'>Password</label>
                    <input type='password'id='psw' className=' text-[10px] bg-slate-100 w-64 h-8 grid gap-2' placeholder='passwors' ></input>
                    <img className='eyesymbool' src='./images/Hide.png' onClick={mufun}></img>
                  </div>  

                  <div className='checkboxData text-[12px]  gap-2 '>
                    <input type='checkbox' className='ckboxremember'></input> 
                    <label className='rememberme'>By creating an account you agree to the<br/>
                    <a className='text-blue-500 underline decoration-1' href='#'>terms of use </a>
                      and our <a className='text-blue-500 underline decoration-1' href='#'>privacy policy.</a></label>
                    {/* <button className='resetpass' >Reset Password?</button> */}
                    
                    </div>                
                  
                  <div>
                    <button type='button' className='submitcustomer font-thin hover:bg-sky-600  '
                     onClick={navigateToAccountConfirm}> Create Account</button>                    
                  </div>
                  <div className='bottomsection text-[12px] '>
                    
                    <label className='donthaveacc'>Already have an account?   </label>
                    <button className='newacc text-sky-600' onClick={navigateToLogin} >Log in</button>
                    
                    </div> 
                  
              </div>
            
        

      </div>


      <div className='right-signup-container1'>
        <img className='image-container1' src='./images/signup.png'></img>

      </div>
    </div>

    </div>
    </>
  )
}

export default SignUp;