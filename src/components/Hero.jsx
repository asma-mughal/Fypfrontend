import React, { useRef, useState } from "react";
import { video } from '../assets/index';
import './style.css';
const Hero = ({click}) => {
  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY>=90){
    setColor(true)
    
    }
    else {
        setColor(false)
    }
}
    const videoRef = useRef();
    window.addEventListener('scroll', changeColor)
  return (
    <div className="flex items-end justify-center w-full h-screen text-center ">
    <div class="ParallaxVideo"
    style={{
      height:'300px',
    }}
    >
 <video
   ref={videoRef}
   src={video}
   autoPlay
   loop
   muted
   className={`h-auto w-auto object-cover ${color && 'opacity-60'}`}
 />
 </div>
 <div
     className={`pb-48 flex flex-col  items-center font-poppins justify-center duration-500 w-full`}
   >
     <h1 className="text-2xl font-bold text-white  md:text-4xl  lg:text-2xl">Hellow. We're Funding here.</h1>
     <h1 className="text-2xl lg:text-5xl md:text-5xl font-bold text-white capitalize mb-12">
    Together, we have it all
     </h1>

</div>
 </div>
  )
}

export default Hero
