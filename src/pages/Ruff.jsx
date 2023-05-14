import React,{useState} from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
const Ruff = () => {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );
  const REACT_APP_GOOGLE_CLIENT_ID = '91170777925-31cdmglvqvnr2rk813lgnfc4h5j8419q.apps.googleusercontent.com'
  useEffect(()=>{
    gapi.load("client:auth2", ()=>(
      gapi.auth2.init({clientId:REACT_APP_GOOGLE_CLIENT_ID})
    ))
  },[])
  console.log(loginData)
    const handleFailure = (result) =>{
    console.log('failure', JSON.stringify(result))
    }
    const handleLogin = async(googleData) =>{
        console.log(googleData , "I AM HERe")
        const res = await fetch('/api/google-login', {
          method: 'POST',
          body: JSON.stringify({
            token: googleData.tokenId,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
        console.log(data)
    }
    const handleLogout = () => {
      localStorage.removeItem('loginData');
      setLoginData(null);
    };
   
  return (
    <GoogleLogin
    clientId={REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={handleFailure}
    cookiePolicy={'single_host_origin'}
  ></GoogleLogin>
  )
}

export default Ruff
