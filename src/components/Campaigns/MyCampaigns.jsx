import React, {useState, useEffect , Fragment} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import ReadOnlyRow from './ReadOnlyRowCam';
import UserStats from './UserStats';
import ShowFunders from './showFunders';
import { getItemCyclic } from 'data-fns';
const MyCampaigns = () => {
    const {getOneCampaign,myCampaign,getUserStat,getCampaignFunder,withDrawFunds} = useAuth()
    const [userMainData, setUserMainData] = useState({})
    const [error, setError] = useState('')
    const [userId, setUserId] = useState(null);
    const [showStats, setShowStats] = useState(false);
    const [showFunders, setShowFunders] = useState(false);
    const navigate = useNavigate();
      useEffect(()=>{
    const fetchData = async() =>{
      getOneCampaign()
    
    }
    fetchData()
  },[])
    const widthDrawFunds =(e, item) =>{
      alert("You are withdrawing Funds")
      withDrawFunds(item?.campaignId)
    }
   
    const getUserStats = (e, item) =>{
      e.preventDefault();
      setShowStats(true)
      console.log("hellow")
      getUserStat(item?.campaignId)

    }
    const getCampaignFunders = (e, item) =>{
      e.preventDefault();
     setShowFunders(true)
     getCampaignFunder(item.campaignId)
    }
    const token = localStorage.getItem("token")
    const newtoken = JSON?.parse(token)
   React.useEffect(()=>{
   if(!newtoken?.value) {
     navigate("/")
   }
   },[newtoken?.value])
  return (
    <div>
        <>
    <div className=''>
        <div className="flex min-h-full items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
         <div className="w-full max-w-md space-y-8">
           <div>
             <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Your Campaigns
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
    <form className="">
    <div class="overflow-x-auto relative ">
    <table 
    
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
                {("Images")}
                </th>
                <th scope="col" className="py-3 px-6 text-center"
                >
                {"Actions"}
                </th>
            </tr>
        </thead>
        <tbody>
         <Fragment>
          {myCampaign?.map((item)=>{
            return (
              <ReadOnlyRow
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
    </table>
     {showStats && <UserStats />}
    {showFunders && <ShowFunders />}
</div>

      </form>
    
     
      </div>
    </div>
 
    </>
    </div>
  )
}

export default MyCampaigns
