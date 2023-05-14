import React,{useState, useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import { clock } from '../assets'
import styles from '../style'
import { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

const CampaignPage = ({campaign}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  const newToken = JSON.parse(token)
  const {deployContract,getOneCampaign,simpleCampaign} =useAuth()

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

  useEffect(()=>{
    const campaignId = localStorage.getItem("cmpId")
    getOneCampaign(campaignId)
  },[simpleCampaign])

  const handleDonate = useCallback(async () => {
    const token = localStorage.getItem("token")
    const newtoken = JSON.parse(token)
    if(newToken.value) {
      navigate("/donate");
   
    }
     else {
      alert("Please Login First")
     }
  }, []);
  //window.ethereum.on('accountsChanged',accountChangedHandler);
  const convertSeconds =(seconds) =>{
    const days = seconds / 86400;
    const roundedDays = Math.round(days);
    return roundedDays;
  }
   
  return (
    <>
    <div class="p-16">
<div class="bg-white shadow mt-20 font-poppins">
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
      <div>
       
      </div>
      <div>
      </div>
          <div>
       
      </div>
    </div>
    <div class="relative">
      <div class="w-48 h-48 mx-auto 
       shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center ">
<img src={"https://images.pexels.com/photos/157520/pexels-photo-157520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className=" h-48 w-48 rounded-lg"/>
      </div>
    </div>

    <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
<button
  class="text-white py-2 px-4 uppercase rounded
   bg-transparent"
>
</button>
    <button
  class="text-white py-2 px-4
 uppercase rounded bg-transparent"
>
 
</button>
    </div>
  </div>

  <div class="text-center border-b mt-24">
    <h1 class="text-4xl font-medium text-black">{simpleCampaign?.title} </h1>

    <p class="mt-8 text-gray-500">Campaign by - username</p>
    <div className='flex flex-row justify-center items-center'>
       <img src={clock} className="pr-3 mt-1"  />
          <p class="mt-2 text-gray-500">Days Left - {convertSeconds(simpleCampaign?.deadline)}</p>
         
    </div>

    <div class="flex flex-row justify-center items-center">
  <div className='pr-32'><text className={`${styles.paragraphDark} max-w-[470px]`}>Raised: {simpleCampaign?.raisedFunds} ETH</text></div>
  <div className={`${styles.paragraphDark} max-w-[470px] px-1.5`}>Goal: {simpleCampaign?.targetFunds} ETH</div>
</div>

<div class="flex flex-row justify-center items-center">

<div class="w-20 items-center pl-10 mt-10 bg-gray-200 rounded-full  dark:bg-gray-700 mb-5">
    <div class="bg-secondary text-xs font-medium text-blue-100 text-center p-0.5 
    leading-none rounded-full" style={{
       width:`${simpleCampaign?.raisedFunds}%`
    }}>
      <text className='font-poppins text-white '> {simpleCampaign?.raisedFunds}%</text></div>
  </div>
  </div>
</div>
 
  </div>
 
  <div class="mt-5 flex flex-col justify-center">
    <p class="text-gray-600 text-center font-poppins font-light pb-10 lg:px-16">
      {campaign.detail}</p>
  <div class="space-x-8 flex justify-between     md:mt-0 md:justify-center">
<button
  class=" py-4  px-7 uppercase
  bg-secondary text-xs text-white  text-center p-0.5 
    leading-none rounded-full hover:bg-secondary shadow hover:shadow-lg 
   font-bold font-poppins transition transform hover:-translate-y-0.5"
   onClick={handleDonate}
>
 Donate
</button>
    <button
  class="py-4 px-7 uppercase
  bg-secondary text-xs text-white text-center p-0.5 
    leading-none rounded-full hover:bg-secondary shadow hover:shadow-lg 
   font-bold font-poppins transition transform hover:-translate-y-0.5"
   onClick={()=>navigate("/chat")}
>
  Chat
</button>
    </div>

</div>
</div>
</>
  )
}

export default CampaignPage
