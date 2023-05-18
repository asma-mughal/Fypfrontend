import React,{useState, useEffect, Fragment} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaUsers, FaBullhorn, FaFileAlt } from 'react-icons/fa';
import ReadOnlyRow from '../pages/Rows/ReadOnlyRow';
import EditableRow from '../pages/Rows/EditableRow';
import ReadOnlyRowCam from './Campaigns/ReadOnlyRowCam';
import UserStats from './Campaigns/UserStats';
import ShowFunders from './Campaigns/showFunders';
import ReadOnlyProj from './Projects/ReadOnlyProj';
import IdeasRow from './ProjectsIdea/IdeasRow';
import ModuleRow from './Projects/ModuleRow';
const TestProfile = () => {
    const {getUser,updateFullUser,logout,getOneCampaign,myCampaign,
      getUserStat,getCampaignFunder,withDrawFunds,projectsRecord, getAllProjects, getOneCampaignUser,
      userCampaigns,userProjects,
      getUserProjects,startedProject
    ,getUserProjectStat,getUserId,pitchedProjects,onGoingProjects} = useAuth()
const [userMainData, setUserMainData] = useState({})
const user = localStorage.getItem("mainUser")
const newUser = (JSON.parse(user))
const [error, setError] = useState('')
const [userId, setUserId] = useState(null);
const navigate = useNavigate();
  useEffect(()=>{
const fetchData = async() =>{
 const data = await  getUserId( newUser?._id);
getOneCampaignUser()
 getAllProjects(userId)
 setUserMainData(data)
 getUserProjects(newUser?._id)

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
console.log(editedContact)
updateFullUser(editedContact)
setUserId(null)
getUserId(newUser?._id);
};
const handleEditClick = (event, contact) => {
console.log(contact)
event.preventDefault();
 setUserId(contact._id)
 const formValues = {
    username:contact.name,
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

const handleCampaign = (e) =>{
  e.preventDefault()
  navigate('/createCampaign')

}

const handleProjects= (e) =>{
  e.preventDefault()
  navigate('/ideaProject')

}

const widthDrawFunds =(e, item) =>{
  alert("You are withdrawing Funds")
  withDrawFunds(item?.campaignId)
}
const startProject=(e, item) =>{
e.preventDefault();
const projectId = localStorage.setItem("startPrj", item.projectId);
navigate("/createProject")
}
const getUserStats = (e, item) =>{
  e.preventDefault();
  localStorage.setItem("userStats", item?.campaignId)
  getUserStat(item?.campaignId)
  navigate("/showStatsCamp")
}
const getCampaignFunders = (e, item) =>{
  e.preventDefault();
  getCampaignFunder(item.campaignId)
  navigate("/showFundCamp")
}
const handleModules =(e, i) =>{
  localStorage.setItem("prjId", i?.projectId)
  //console.log(i)
  navigate("/myModules")
  }
  const withdDrawProjectFunds = (e) =>{
  }
  const getUserStatsProject = (e) =>{
    getUserProjectStat()
    navigate("/projectStats")
  }
  const createModule = (e) =>{
    navigate("/createModule")
  }
  
const token = localStorage.getItem("token")
const newtoken = JSON.parse(token)
useEffect(()=>{
  if(!newtoken?.value){
    navigate("/")
  }
},[newtoken?.value])
  return (
    <div className="flex font-poppins h-full bg-gradient-to-br  from-secondary to-white bg-opacity-70">
    <div className="w-1/6 bg-ff4a51 flex flex-col justify-center items-center">
      <div className="text-white text-2xl mb-4">Dashboard</div>
      <ul className="text-white text-lg">
        <li className="mb-4">
          <a href="#" className="flex items-center">
            <FaUsers className="h-6 w-6 mr-2" />
            <span>Users</span>
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="flex items-center">
            <FaBullhorn className="h-6 w-6 mr-2" />
            <span>Campaigns</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <FaFileAlt className="h-6 w-6 mr-2" />
            <span>Projects</span>
          </a>
        </li>
        <li>
        <button
        onClick={handleLogout}
        
        className="bg-white mt-10 hover:bg-gray-100 
      text-gray-800 font-semibold py-2 px-7 border border-white rounded shadow mb-8">
          Logout
    
        </button>
        </li>
      </ul>
     
    </div>
    <div className="flex-1 p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="text-xl font-bold mb-4">Profile</div>
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
            {userId === userMainData?._id ? (    
            <EditableRow
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
  <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="text-xl font-bold mb-4">My Campaigns</div>
        <form onSubmit={""} className="">
    <div class="overflow-x-auto relative ">
      {userCampaigns?.length ===0 ? <p>No Campaign to Show</p>: <table 
    
    className="w-full text-sm text-left 
    text-gray-500 dark:text-gray-400 
    ">
        <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6 ">
                {("Title")}
                </th>
                <th scope="col" classname="py-3 px-6">
                {("Description")}
                </th>

                <th scope="col" className="py-3 px-6 text-center">
                {("Raised funds")}
                </th>
                <th scope="col" className="py-3 px-6 text-center"
                >
                {("Remaining Funds")}
                </th>
                <th scope="col" className="py-3 px-6 text-center"
                >
                {("Status")}
                </th>
                
                <th scope="col" className="py-3 px-6 text-center"
                >
                {"Actions"}
                </th>
            </tr>
        </thead>
        <tbody>
         <Fragment>
          {userCampaigns?.map((item)=>{
            return (
              <ReadOnlyRowCam
              key={item?.campaignId}
              item={item}
              widthDrawFunds={widthDrawFunds}
              getUserStats={getUserStats}
              getCampaignFunders={getCampaignFunders}
            />
            )
          })}
           
              
                  

              </Fragment>
           
           
            
        </tbody>
    </table>}
    
      </div>
      </form>
   
  </div> 
  <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="text-xl font-bold mb-4">My Ideas</div>
        <form onSubmit={""} className="">
    <div class="overflow-x-auto relative ">
      {userProjects?.length ===0 ? <p>No Projects to show</p> :   <table class="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Title
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Description
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Target Funds
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Raised Funds
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Remaining Funds
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Images
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Actions
      </th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200">
  <Fragment>
          {pitchedProjects?.map((item)=>{
            return (
              <IdeasRow
              key={item?.projectId}
              item={item}
              startProject={startProject}
            />
            )
          })}
           </Fragment>
  </tbody>
</table>  }
  
      </div>
      </form>
   
  </div>
  <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="text-xl font-bold mb-4">Projects Scheduled</div>
        <form onSubmit={""} className="">
    <div class="overflow-x-auto relative ">
      {userProjects?.length ===0 ? <p>No Projects to show</p> :   <table class="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Title
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Description
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Target Funds
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Raised Funds
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Remaining Funds
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Images
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Actions
      </th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200">
  <Fragment>
          {startedProject?.map((item)=>{
            return (
              <ReadOnlyProj
              key={item?.projectId}
              item={item}
              createModule={createModule}
            />
            )
          })}
           </Fragment>
  </tbody>
</table>  }
  
      </div>
      </form>
   
  </div> 
  <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="text-xl font-bold mb-4">Projects Ongoing</div>
        <form onSubmit={""} className="">
    <div class="overflow-x-auto relative ">
      {userProjects?.length ===0 ? <p>No Projects to show</p> :   <table class="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Title
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Description
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Target Funds
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Raised Funds
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Remaining Funds
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Images
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Actions
      </th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200">
  <Fragment>
          {onGoingProjects?.map((item)=>{
            return (
              <ModuleRow
              key={item?.projectId}
              item={item}
              withdDrawProjectFunds={withdDrawProjectFunds}
              getUserStatsProject={getUserStatsProject}
              handleModules={handleModules}
            />
            )
          })}
           </Fragment>
  </tbody>
</table>  }
  
      </div>
      </form>
   
  </div>
   </div>
    
  </div>
  )
}

export default TestProfile
