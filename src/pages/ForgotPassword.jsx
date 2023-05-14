import React,{useState, useRef, useEffect} from 'react'
import { Link} from 'react-router-dom';
import { logo } from '../assets';
import styles from '../style';
import { Button } from '../components';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
const ForgotPassword = () => {
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const emailRef= useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const {resetPassword,resetPass} = useAuth()
  useEffect(()=>{
    if(resetPass==='SUCCESS'){
     navigate('/newpass')
    }
    },[resetPass])
  async function handleSubmit (e) {
    e.preventDefault();
    
        try {
          setMessage('')
            setError('')
            setLoading(true)
           await resetPassword(emailRef?.current?.value);
           setMessage('Password updated successfully')
        }
       catch(error) {
       console.log(error)
       setError('Failed to Reset password')
       }
    setLoading(false)
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
           Password Reset
            </h2>
            
          </div>
          
          {error && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Failed!</strong>
  <span class="block sm:inline">{error}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>}
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="verification-code" className="sr-only">
                  Email address
                </label>
                <input
                  id="verification-code"
                  ref={emailRef}
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className={`${styles.inputauth}`}
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="verification-code" className="sr-only">
                  Email address
                </label>
              
              </div>
             
            
            </div>

           

            <div>
            <Button
              text='Request Change'
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
              <p className='font-poppins'>Don't have an account? </p>
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 ">
                <Link to="/signin"><text className='font-poppins text-secondary font-bold'>Login Here</text></Link>
                </label>
              </div>

             
            </div>
        </div>
      </div>
   </>
  )
}

export default ForgotPassword
