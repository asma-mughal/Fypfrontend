import React, {useRef, useState} from 'react'
import styles from '../style';
import { Button } from '../components';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';
import { logo } from '../assets';
import { useNavigate } from 'react-router-dom';
import { eyeClose, eyeIcon } from '../assets';
import { passRegex } from '../constants/constants';
const PasswordUpdate = () => {
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const emailRef= useRef();
    const passRef = useRef();
    const confPassRef = useRef();
    const [eye, setEye]= useState(false);
    const [passError, setPassError] = useState(true);
    const [eyeConf , setEyeConf] = useState(false);
    const navigate= useNavigate()
    const oldPassRef = useRef();
    const {updatePass,updatePasswordSuccess} = useAuth();
    useEffect(()=>{

    if(updatePasswordSuccess === "SUCCESS"){
    navigate('/')
    }
    },[updatePasswordSuccess])
    async function handleSubmit (e) {
      e.preventDefault();
          try {
            
            setMessage('')
              setError('')
              setLoading(true)
             await updatePass(passRef?.current?.value,  confPassRef?.current?.value)
             setMessage('Password updated successfully')
          }
         catch(error) {
         console.log(error)
         setError('Failed to change password')
         }
      setLoading(false)
      }
      const validationPass = (value) =>{
        const res1 = passRegex.test(value)
        setPassError(res1)
        console.log(res1)
      }
  return (
    <>
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
         <div className="w-full max-w-md space-y-8">
           <div>
           <img
               className="mx-auto h-20 w-auto font-poppins "
               src={logo}
               alt="Your Company"
             />
             <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Password update
             </h2>
             
           </div>
           
           {error && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
   <strong class="font-bold">Failed!</strong>
   <span class="block sm:inline">{error} </span>
   <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
     <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
   </span>
 </div>}
           <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
             <input type="hidden" name="remember" defaultValue="true" />
             <div className="-space-y-px rounded-md shadow-sm">
             <div  className="w-full px-3">
              <div className="relative">
              
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  ref={passRef}
                  type={eye ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className={`${styles.inputauth}`}
                  placeholder="Old Password"
                />
                
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
        <div 
        type='none'
        className="p-1 focus:outline-none focus:shadow-outline"
        onClick={()=>setEye(!eye)}
        >
     <img src={eye ? eyeIcon : eyeClose} />
        </div>
      </span>
   
              </div>
              </div>
              </div>
              <div  className="w-full px-2">
              <div className='relative'>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="Confpassword"
                  ref={confPassRef}
                  name="confPassword"
                  type={eyeConf? "text" : "password"}
                  required
                  onChange={()=>validationPass(confPassRef.current.value)}
                  className={`${styles.inputauth}`}
                  placeholder="New Password"
                />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2">
        <div className="p-1 focus:outline-none focus:shadow-outline"
        onClick={()=>setEyeConf(!eyeConf)}
        >
     <img src={eyeConf ? eyeIcon : eyeClose} />
        </div>
        
      </span>
              </div>

              <p className={`text-sm font-poppins mb-2
              ${passError? 'text-gray-400' : 'text-red-600'} mx-1
              `}
              style={{
                marginTop:'-0.5rem'
              }}
              >8 to 20 char, with numeric, uppercase and lowercase</p>
             
             </div>
 
            
 
             <div>
             <Button
               text='Reset Password'
               width="450px"
               height="40px"
               padding="14px"
               typeYes="true"
               >
                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                   
                 </span>
               </Button>
             </div>
           </form>
           <div className="flex items-center justify-between">
           <div className="flex items-center">

               </div>
             </div>
         </div>
       </div>
    </>
  )
}

export default PasswordUpdate
