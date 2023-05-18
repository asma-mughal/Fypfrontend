import React, {useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
const GetProjects = () => {
  const {allGoing, getAllProjects,getOneProject} = useAuth()
  const navigate = useNavigate();
useEffect(()=>{
  getAllProjects()
  
},[allGoing])
const handleDonate =(e, i) =>{
localStorage.setItem("prjId", i)
getOneProject(i)
navigate("/getModules")
}
  return (
    <div>
       <div class="main bg-white"
  style={{
    marginTop:'-0.5%'
  }}>
  <h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[48px] text-black
     ss:leading-[100.8px] leading-[75px] text-start ml-5">
          Projects<span className='text-secondary'>.</span> </h1>
        
  <ul class="cards font-poppins">
    {allGoing  && allGoing?.map((i)=>{
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
            <button
  class=" py-4  px-7 uppercase
  bg-white text-xs text-black  text-center p-0.5 
    leading-none rounded-full hover:bg-white hover:border-secondary shadow hover:shadow-lg 
   font-bold font-poppins transition transform hover:-translate-y-0.5"
   onClick={(e) => handleDonate(e, i?.projectId)}
>
 Modules
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

export default GetProjects
