import React, {useState, useRef, Fragment} from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate  } from 'react-router-dom';
import styles from '../style';
import { Button } from '../components';
import { logo, eyeClose, fb , google } from '../assets';
import { pakPhoneRegex } from '../constants/constants';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import GoogleSearch from '../components/GoogleSearch';
import { useEffect } from 'react';
const UpdateProfile = () => {
  const fileRef = useRef();
  const [value, setValue] = useState('');
  const [eye, setEye]= useState(false);
  const [userMainData, setUserMainData] = useState({})
  const [imageUpload, setImageUpload] = useState(null);
  const [address, setAddress] = useState('');
  useEffect(()=>{
    const fetchData = async() =>{
     const data = await getUser();
     setUserMainData(data)
    }
    fetchData()
  },[])
  console.log(userMainData.email)
  const [coordinates, setCoordinates] = useState({
    longitude:'',
    latitude:''
})
const [editFormData, setEditFormData] = useState({
  active: true,
  address: userMainData.address,
  email: userMainData.email,
  username: userMainData.email
 }); 

  const [eyeConf , setEyeConf] = useState(false);
  const { updateE,logout, getUser } = useAuth()
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
    function handleSubmit(e) {
      e.preventDefault()
      if (passRef.current.value !== confPassRef.current.value) {
        return setError("Passwords do not match")
      }
    
      const promises = []
      setLoading(true)
      setError("")
  
      /*if (emailRef.current.value !== currentUser.email) {
        promises.push(updateE(emailRef.current.value))
      }
      if (passRef.current.value) {
        promises.push(updatePass(passRef.current.value))
      }
  
      Promise.all(promises)
        .then(() => {
          navigate("/home")
        })
        .catch((e) => {
          console.log(e, "erro")
          setError("Failed to update account")
        })
        .finally(() => {
          setLoading(false)
        })*/
    }
    const handleEditFormChange = (event) => {
      event.preventDefault();
      const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData) 
      };
  return (
    <>
    <div className="flex min-h-full items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
         <div className="w-full max-w-md space-y-8">
           <div>
           <img
               className="mx-auto h-20 w-auto font-poppins "
               src={logo}
               alt="Your Company"
             />
             <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Update your account
             </h2>
             
           </div>
           {error && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
   <strong class="font-bold">Failed!</strong>
   <span class="block sm:inline">{error}</span>
   <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
     <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
   </span>
 </div>}
           <form class="w-full max-w-lg" action="#" method="POST" onSubmit={handleSubmit}>
             <input type="hidden" name="remember" defaultValue="true" />
             <div className="flex flex-wrap -mx-3 mb-6 rounded-md shadow-sm">
               <div class="w-full md:w-1/2 px-3 md:mb-0">
               <label htmlFor="username" className="sr-only">
                   User Name
                 </label>
                 <input
                   id="username"
                   onChange={()=>setEditFormData()}
                   name="username"
                   type="text"
                   autoComplete="text"
                   required
                   placeholder='Username'
                   value={userMainData.username}
                   className={`${styles.inputauth}`}
                 /> 
                  <label htmlFor="email-address" className="sr-only">
              Phone Number
                 </label>
               <input
                   id="email-address"
                   name="email"
                   type="email"
                   autoComplete="email"
                   onChange={handleEditFormChange}
                   value={editFormData.email}
                   required
                   placeholder='Email Address'
                   className={`${styles.inputauth}`}
                 />
                 
               </div>
               <div class="w-full md:w-1/2 px-3">
               <label htmlFor="Phone-number" className="sr-only">
                 Email Address
               </label>
              
                 <input
                 id="phone Number"
                 
                 name="phone"
                 type="tel"
                 required
                 pattern={pakPhoneRegex || interRegex}
                 placeholder='Phone Number'
                 className={`${styles.inputauth}`}
               />
                 
                 <label htmlFor="Phone-number" className="sr-only">
                 address
               </label>
              
                 <input
                 id="phone Number"
                 onChange={handleEditFormChange}
                 name="phone"
                 type="text"
                 required
                 placeholder='Address'
                 className={`${styles.inputauth}`}
                 value={editFormData.address}
               />
               </div>
               {/* <div  class="w-full md:w-1/2 px-3">
               <div class="relative">
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
         <div 
         type='none'
         class="p-1 focus:outline-none focus:shadow-outline"
         onClick={()=>setEye(!eye)}
         >
      <img src={eye ? eyeIcon : eyeClose} />
         </div>
       </span>
                 
               </div>
               </div> */}
               {/* <div  class="w-full md:w-1/2 px-3">
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
                   className={`${styles.inputauth}`}
                   placeholder="Confirm Password"
                 />
                   <span class="absolute inset-y-0 right-0 flex items-center pr-2">
         <div class="p-1 focus:outline-none focus:shadow-outline"
         onClick={()=>setEyeConf(!eyeConf)}
         >
      <img src={eyeConf ? eyeIcon : eyeClose} />
         </div>
       </span>
               </div>
               </div> */}
               {/* <div  class="w-full mx-3">
               <Calendar calendar={calendar}  setCalendar={setCalendar}/>
              </div> */}
              <div class="w-full mx-3">
        <div class="">
        {imageUpload != null ? <p className='font-poppins text-sm font-bold text-black'>
            Uploaded Image Successfully!</p> : <div class="flex items-center justify-center w-full">
                <label
                    class="flex flex-col w-full h-24 border-2 border-blue-100 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider
                        font-poppins text-gray-400 group-hover:text-gray-600">
                            Attach your Image</p>
                    </div>
                    <input type="file" class="opacity-0"
                    onChange={e => uploadImage(e)} 
                    accept=".jpg,.png,.jpeg"
                    />
                </label>
            </div>}
        </div>
      
    </div>
</div> 
<div className='w-full'>
<GoogleSearch address={address} setAddress={setAddress } coordinates={coordinates}
 setCoordinates={setCoordinates} 


/>
               <div  class="w-full pb-5">
               <Menu as="div" className="relative inline-block text-left w-full font-poppins">
       <div>
         <Menu.Button className="inline-flex w-full justify-center 
         rounded-md border border-gray-300  bg-gray-50  px-4 py-2 
         text-sm font-medium text-gray-400 h-10 shadow-sm w-full
         ">
           Options
           <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
         </Menu.Button>
       </div>
 
       <Transition
         as={Fragment}
         enter="transition ease-out duration-100"
         enterFrom="transform opacity-0 scale-95"
         enterTo="transform opacity-100 scale-100"
         leave="transition ease-in duration-75"
         leaveFrom="transform opacity-100 scale-100"
         leaveTo="transform opacity-0 scale-95"
       >
         <Menu.Items className="absolute
          right-0 z-10 mt-2 w-full  rounded-md bg-white "
 >
           <div className="py-1">
            
            
             <Menu.Item>
               {({ active }) => (
                 <a
                   href="#"
                   className={classNames(
                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                     'block px-4 py-2 text-sm'
                   )}
                   
                 onClick={()=>setValue('Investor')}
                 >
                   Investor
                 </a>
               )}
             </Menu.Item>
      
               <Menu.Item>
                 {({ active }) => (
                   <button
                     className={classNames(
                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                       'block w-full px-4 py-2 text-left text-sm'
                     )}
                     onClick={()=>setValue('Fund')}
                   >
                     Fund raiser
                   </button>
                 )}
               </Menu.Item>
            
           </div>
         </Menu.Items>
       </Transition>
     </Menu>
               </div>
             </div>

             <div className='mb-3'>
             <Button
               disabled={loading}
               text='Update'
               width="450px"
               height="40px"
               padding="14px"
               typeYes="true"
               >
                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                   
                 </span>
               </Button>
             </div>
             
             <div className=''>
             <button
                onClick={()=>navigate("/pass")}
                  class="bg-secondary border-secondary w-full font-poppins rounded-3xl border p-2
                   text-white transition font-bold mb-3"
                >
                  Change Password
                </button>
                
                <button
                onClick={logoutBtn}
                  class="bg-secondary border-secondary w-full font-poppins rounded-3xl border p-2
                   text-white transition  font-bold"
                >
                  
                 Logout
                </button>
             </div>
             
           </form>
           <div className="flex items-center justify-between">
               <div className="flex items-center">
               
                 <label htmlFor="remember-me" 
                 className="ml-2 block text-sm text-gray-900 ">
                 <Link to="/signin">
                   </Link>
                 </label>
               </div>
 
              
             </div>
             <div className="flex items-center justify-center flex-col">
            
            <div className='flex  px-10 py-3'>
           
            
 
            </div>
            </div>
         </div>
       </div>
    </>
  )
}

export default UpdateProfile
