import React,{useState, useEffect, Fragment} from 'react'
import { useAuth } from '../contexts/AuthContext'
import EditableRow from './Rows/EditableRow'
import { logo } from '../assets'
import ReadOnlyRow from './Rows/ReadOnlyRow'
import { useNavigate } from 'react-router-dom';
import MyCampaigns from '../components/Campaigns/MyCampaigns'
const UserProfile = () => {
    const {getUser,updateFullUser,logout} = useAuth()
    const [userMainData, setUserMainData] = useState({})
    const [error, setError] = useState('')
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();
      useEffect(()=>{
    const fetchData = async() =>{
     const data = await getUser();
     setUserMainData(data)
    }
    fetchData()
  },[])
  const [editFormData, setEditFormData] = useState({
    username:"",
    email:"",
    phone_number :"",
    address: ""
   }); 
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id:userMainData._id,
      username: editFormData.username,
      email: editFormData.email,
      phone_number:editFormData.phone_number,
      address:editFormData.address
    };
    updateFullUser(editedContact)
    setUserId(null)
    getUser()
};
const handleEditClick = (event, contact) => {
    console.log(contact)
    event.preventDefault();
     setUserId(contact._id)
     const formValues = {
        username:contact.username,
        email:contact.email,
        phone_number : contact.phone_number,
        address: contact.address
      };
      setEditFormData(formValues)
};
const handleCancelClick = () => {
    setUserId(null)
};
const handleEditFormChange = (event) => {
    event.preventDefault();
  const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData) 
    };
    const handleLogout = (e) =>{
    e.preventDefault()
    alert("Wait ! You are logging Out")
    logout()
    setTimeout(()=>{
    navigate("/")
    },[2000])
    
    }
    const handlePassword =(e) =>{
    navigate('/pass')
    }
    const token = localStorage.getItem("token")
    const newToken = JSON.parse(token)
    const handleCampaign = (e) =>{
      e.preventDefault()
      navigate('/createCampaign')

    }
    const editCampaign = (e) =>{
      navigate('/pass')
    }
    const myCampaign = (e) =>{
      navigate('')
    }
    const handleProjects= (e) =>{
      e.preventDefault()
      navigate('/createProject')

    }
  return (
    <>
    {!newToken && navigate("/")}
    <div className=''>
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
 </div>
 </div>
      <div className="m-5">
    <form onSubmit={handleEditFormSubmit} className="">
    <div class="overflow-x-auto relative ">
    <table 
    
    className="w-full text-sm text-left 
    text-gray-500 dark:text-gray-400 
    ">
        <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6 ">
                {("Name")}
                </th>
                <th scope="col" classname="py-3 px-6">
                {("Email")}
                </th>

                <th scope="col" className="py-3 px-6 text-center">
                {("Phone Number")}
                </th>
                <th scope="col" className="py-3 px-6 text-center"
                >
                {("Address")}
                </th>
                <th scope="col" className="py-3 px-6 text-center"
                >
                {"Actions"}
                </th>
            </tr>
        </thead>
        <tbody>
         <Fragment>
            {userId === userMainData._id ? (    <EditableRow
                  item={userMainData}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />) : (<ReadOnlyRow
                    item={userMainData}
                    handleEditClick={handleEditClick}
                    handleLogout={handleLogout}
                    handlePassword={handlePassword}
                    handleCampaign={handleCampaign}
                    handleProjects={handleProjects}
                  />)}
              
                  

              </Fragment> {/* To check if there is any contact Id or not? if there is no
               contact ID then it means user is reading the row  */ }
           
           
            
        </tbody>
    </table>
</div>
      </form>
      </div>
      <MyCampaigns />
    </div>
    </>
  )
}

export default UserProfile
