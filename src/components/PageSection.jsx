import React from 'react'

const PageSection = ({ name, title, subtitle, children }) => {
    return (
        <div name={name} className="w-full bg-background pt-10">
        <div className=" text-center">
          <h1 className="text-5xl font-bold text-center text-white font-poppins">
            {title}<span className='text-secondary'>
            
            .</span></h1>
          <h1 className="text-5xl text-center font-bold text-white font-poppins">
            {name}<span className='text-secondary'>
            
            .</span></h1>
          <p className="mt-8 mb-16 mx-28 text-center  text-gray-300 font-poppins">{subtitle}</p>
  
          {children}
        </div>
      </div>
      );
}

export default PageSection
