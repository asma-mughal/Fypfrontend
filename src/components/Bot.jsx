import React from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import { chat } from '../assets/index';
const Bot = () => {
  const navigate = useNavigate();
  return (
    <div 
    style={{
        backgroundColor:'#cbd5e1'
    }}
    className="fixed bottom-5 sm:right-8 right-4 z-[999]
     cursor-pointer text-white text-4xl 
     w-14 h-14 flex items-center justify-center rounded-full animate-bounce"
     onClick={()=> navigate("/chat")}
     >
    <img src={chat} className="h-5 w-5" />
    </div>
  )
}

export default Bot
