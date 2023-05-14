import React, {useEffect, useRef, useState} from 'react'
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate  } from 'react-router-dom';
import { logo,eyeIcon, eyeClose } from '../assets';
import styles from '../style';
import FacebookLogin from 'react-facebook-login';
const SignIn  = () => {
  const userToken = localStorage.getItem("token")
    const emailRef= useRef();
    const passRef = useRef();
    const [eye, setEye]= useState(false);
    const [formErrors, setFormErrors] = useState({
      email: "", 
    password: "",
  });
  
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
     
     const {login, googleSignIn,DatabaseSoicalLogin,testSocialLogin, setTestSocialLogin,loginMsg} = useAuth()
    const navigate = useNavigate();
    useEffect(()=>{
      if(loginMsg === "SUCCESS"){
       navigate("/")
      }
      
     },[loginMsg])
    const handleGoogleSignIn = async(e) =>{
     e.preventDefault()
      try{

      await googleSignIn()
      }catch(e){
       console.log(e)
       setError('Failed to Link account')
      }
     }
    async function handleSubmit (e) {
    e.preventDefault();
        try {
            setError('')
            setLoading(true)
           await login(emailRef.current.value,passRef.current.value);
         
        }
       catch(error) {
       console.log(error)
       setError('Failed to Sign In')
       }
    setLoading(false)
    }
    const responseFacebook = (response) => {
      if(response){
        DatabaseSoicalLogin("facebook", response)
        setTestSocialLogin(true)
        localStorage.setItem("socialLogin", JSON.stringify(testSocialLogin))
      }
    }
    const [accounts, setAccounts] = useState([]);

    // Function to handle the button click
    async function handleClick() {
      if (window.ethereum) {
        try {
          // Request access to the user's accounts
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccounts(accounts);
          localStorage.setItem("userAddress", accounts)
        } catch (error) {
          console.error(error);
        }
      }
    }
    async function switchAccount(index) {
      if (window.ethereum) {
        try {
          // Switch to the selected account
          await window.ethereum.request({ method: 'eth_accounts', params: [index] });
          setAccounts(await window.ethereum.request({ method: 'eth_accounts' }));
        } catch (error) {
          console.error(error);
        }
      }
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
            <h2 className="mt-6 text-center font-poppins text-3xl font-bold tracking-tight
             text-gray-900">
              Sign in to your account
            </h2>
            
          </div>
          {error && <div class="bg-red-100 border
           border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold font-poppins">Failed!</strong>
  <span class="block sm:inline font-poppins">{error}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3 font-poppins">
    <svg class="fill-current h-6 w-6 text-red-500" role="button"
     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title>
     <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>}
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only font-poppins">
                  Email address
                </label>
                <input
                ref={emailRef}
                  id="email-address"
                  abc="emailRef"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email address"
                  className={`${styles.inputauth}`}
                />
              </div>
              <div className='relative'>
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
                  placeholder="Password"
                />
                
                 <span class="absolute inset-y-0 right-0 flex items-center pr-2">
        <button  class="p-1 "
        type="button"
        onClick={()=>setEye(!eye)}
        >
     <img src={eye ? eyeIcon : eyeClose} />
        </button>
      </span>
              </div>
            </div>  
            <div class="flex">
  <div class="flex-none w-21 h-5">
   <Link to="/forgot" className='underline font-poppins'>Forget password?</Link>
  </div>
</div>
            <div>
              <Button
              disabled={loading}
              text='Sign in'
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
                <Link to="/signup"><text className='font-poppins text-secondary font-bold'>Register Here</text></Link>
                </label>
              </div>
            </div>
            <div class="seperator"><b>or</b>
            
            </div>
            <FacebookLogin
    appId="1057176008302177"
    autoLoad={false}
    cssClass="my-facebook-button-class font-poppins "
    fields="name,email,picture"
    callback={responseFacebook} />
    
    <button className='bg-white  shadow-lg border-0 rounded-none font-poppins  '
    style={{
      backgroundColor:'#C94130',
      width: '100%',
  height: '3rem',
marginTop:'2%',
borderRadius:'3rem',
borderWidth: '2px'
    }}
    
    >   <a href="#" class="btn text-white"
        
        
    onClick={handleGoogleSignIn}><i class="fa fa-google fa-fw "
    >
      </i> Login with Google
    </a>
        </button>
        </div>
      </div>
   </>
  )
}

export default SignIn 
