import React,{useEffect, useState} from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
const MyModules = () => {
  const {getOneProject, projectModules, withDrawProjectFunds} = useAuth()
    const navigate = useNavigate();
    console.log(projectModules)
  useEffect(()=>{
    const id = localStorage.getItem("prjId")
    getOneProject(id)
  },[])
  const handleDonate =(e, i) =>{
    alert("you are withdrawing funds")
    withDrawProjectFunds(i) 
  }
  return (
    <div>
    <div class="main bg-white"
style={{
 marginTop:'-0.5%'
}}>
<h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[48px] text-black
  ss:leading-[100.8px] leading-[75px] text-start ml-5">
       Modules of Project<span className='text-secondary'>.</span> </h1>
    
{projectModules?.length===0 && <p className='m-5 font-bold font-poppins'>No Modules here</p>}
<ul class="cards font-poppins">
 {projectModules  && projectModules?.map((i)=>{
   return (
     <li class="cards_item" key={i?.projectId}>
     <div class="card">
       <div class="card_image">
         <img 
         className=''
         src="https://images.pexels.com/photos/8553864/pexels-photo-8553864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></div>
       <div class="card_content">
         <h2 class="card_title">{i?.title}</h2>
         <p class="card_text">{i?.description}</p>
         <p class="card_text">Target Funds: {i?.moduleFunds?.targetFunds} ETH</p>
         <p class="card_text">Raised Funds: {i?.moduleFunds?.raisedFunds} ETH</p>
         <p class="card_text">Remaining Funds: {i?.moduleFunds?.remainingFunds} ETH</p>
         <p class="card_text">Status: {i?.status}</p>
         <button
class=" py-4  px-7 uppercase
bg-white text-xs text-black  text-center p-0.5 
 leading-none rounded-full hover:bg-white hover:border-secondary shadow hover:shadow-lg 
font-bold font-poppins transition transform hover:-translate-y-0.5"
onClick={(e) => handleDonate(e, i?.moduleId)}
>
  {
   'WithDraw Funds'
  }
</button>
       </div>
    
     </div>
   </li>
   )
  
 })}
 
</ul>
</div>
 </div>
  )
}

export default MyModules
