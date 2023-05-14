import React,{useRef, useState,useEffect} from 'react'
import styles from '../style';
import { Button } from '../components';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './style.css';

const OTP = () => {
  const {currentUser, registermsg,otpEmail,
    emailEmail, sendOTP, loginsuccess,otpText} = useAuth()
  const [otp,setOTP] = useState();
   const navigate = useNavigate();

  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
   const OTPRef= useRef();
   const handleSubmit = () =>{
  
    // if(res.data.otp_code==OTPRef.current.value) {
    //   sendOTP(OTPRef.current.value)
    //   setError('')
    // }
    // else {
    //   setError('Wrong OTP')
    // }
    sendOTP(OTPRef.current.value)
   }
    useEffect(()=>{
    if(otpText==='Action Success'){
     navigate('/signin')
    }
    },[otpText])
  return (
    <div className="flex min-h-full flex-col
    items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {error && <div class="bg-red-100 border my-3 border-red-400
         text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold px-3">Failed!</strong>
  <span class="block sm:inline">{error}</span>
  
</div>}
    <div className=''>
            <p className="mx-auto  w-auto font-poppins ">
                An OTP has been sent to your email!</p>
          </div>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only font-poppins">
              Enter OTP here
            </label>
            <input maxlength= '13'  
              ref={OTPRef}
              id="email-address"
              abc="emailRef"
              name="email"
              type="text"
              placeholder='OTP Here'
              className={`${styles.inputauth} text-center email-address`}
            ></input>
            <button 
            onClick ={handleSubmit}
            class="bg-secondary border-secondary w-full font-poppins rounded-3xl border p-2
            text-white transition font-bold">
  Submit
</button>
          </div>
       
        </div>
        <div>
      
        </div>
    
    
    </div>
  )
}

export default OTP
