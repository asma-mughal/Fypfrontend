import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useEffect } from 'react';

const ShowProject = () => {
  const {allPitched, getAllProjects } = useAuth();
  useEffect(()=>{
  getAllProjects()
  },[])
  return (
    <div class="main bg-white"
    style={{
      marginTop:'-0.5%'
    }}>
    <h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[44px] text-black
       ss:leading-[100.8px] leading-[75px] text-start ml-5">
            Suggested Ideas<span className='text-secondary'>.</span> </h1>
          
    <ul class="cards font-poppins">
      {allPitched  && allPitched?.map((i)=>{
        return (
          <li class="cards_item" key={i?._id}>
          <div class="card">
            <div class="card_image">
              <img 
              className=''
              src="https://images.pexels.com/photos/8553864/pexels-photo-8553864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></div>
            <div class="card_content">
              <h2 class="card_title">{i?.title}</h2>
              <p class="card_text">{i?.description}</p>
  
            </div>
          </div>
        </li>
        )
       
      })}
      
    </ul>
  </div>
  )
}

export default ShowProject
