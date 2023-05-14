import React from 'react'
import { projects1 } from '../constants/constants';
import { clock} from '../assets/index';
import styles from '../style';
import Button from './Button';
import { useNavigate} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';
const Projects = ({campaign,setCampaign}) => {
  const {getAllCampaigns, campaignsRecord} = useAuth();
  useEffect(()=>{
  getAllCampaigns()
  },[])
  const convertSeconds =(seconds) =>{
    const days = seconds / 86400;
    const roundedDays = Math.round(days);
    return roundedDays;
  }

       var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
       //autoplay:true,
       arrows: false,
     
      };
       const navigate = useNavigate();
       const handleClick = (e,i) =>{
        e.preventDefault();
        const campaignId = localStorage.setItem("cmpId", i)
        navigate("/projPage")
       }
  return (
    <div name="projects" id="projects">
    <Slider {...settings}
    style={{
      backgroundColor:'white'
    }}
    >
      
      {campaignsRecord?.map((i)=>{
         const record = convertSeconds(i.deadline);
        return(
          <div class="grid grid-cols-1 sm:grid-cols-1
           md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 bg-white">
          <div class=" w-full lg:w-full lg:flex  ">
          <img
                className="object-cover w-full
                h-80
                lg:w-96 lg:h-96"
                src={"https://images.pexels.com/photos/157520/pexels-photo-157520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt="image"
            />
            <div class="
              bg-white items-center lg:w-1/2 lg:ml-10 flex flex-col 
              font-poppins
              justify-center leading-normal">
              <div class="m-10">
                
                <div class="text-secondary font-bold text-xl uppercase  
                hover:underline m-4 lg:m-0 xl:m-0
                "
                
                >{i?.title}</div>
                <div class="text-gray-900 font-bold text-base  m-4   lg:m-0 xl:m-0 mb-2">Campaign By: {i.campaignBy}</div>
                <div class="text-gray-900 font-normal text-base lg:m-0 xl:m-0 m-4   mb-2">
                {i?.description}
                </div>
                <div class="flex flex-row m-5 lg:m-0 xl:m-0">
  <div className=' w-full'><text className={`${styles.paragraphDark} max-w-[470px]`}>Raised: {i.Raised} ETH</text></div>
  <div className={`${styles.paragraphDark} 
   flex justify-end max-w-[470px] px-1.5 w-full`}>Goal: {i?.targetFunds} ETH</div>
</div>
                <div class=" w-50 m-5 lg:m-0 xl:m-0 bg-gray-200 rounded-full dark:bg-gray-700 mb-5">
    <div class="bg-secondary text-xs font-medium text-blue-100 text-center p-0.5 
    leading-none rounded-full" style={{
       width:`${i.raisedFunds}%`
    }}><text className='font-poppins text-white'> {i.raisedFunds ? i?.raisedFunds : 0}%</text></div>
  </div>
                <div class="flex flex-row m-5  xl:m-0 ">
  <div className='flex flex-row w-full'>
    <img src={clock}  className="h-4 w-4 mt-1.5 mr-1"/>
    <div className={`${styles.paragraphDark} text-gray-500 max-w-[470px]`}>{record}{' '}{record==1|| record===0 ?'Day Left' :"Days Left"}</div>
  </div>
 
  <div className='text-transparent'>

    <button 
            onClick= {(e)=>{handleClick(e, i?.campaignId)}}
            class="bg-secondary border-secondary w-full font-poppins rounded-3xl border p-2
            text-white transition font-bold ml-5 ">
  Donate
</button>
  </div>

</div>
              </div>
            </div>
          </div>
          </div>
    )
      })}
    
    
  </Slider>
  </div>
  )
}

export default Projects
