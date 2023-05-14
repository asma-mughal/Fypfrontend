import React from 'react'
import styles from '../style'
import { people01, people02 } from '../assets/index';
const AboutUs = () => {
  return (
    <section id="about" name="about" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className=''>
    <h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[52px] text-black
     ss:leading-[100.8px] leading-[75px]">
          About Us<span className='text-secondary'>.</span>
        </h1> 
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Crowdfunding is the process of raising money from a large number of people in order to fund a project, a company, or a cause. In some cases, the funders do so as an altruistic donation, while in other cases,
         they get rewards, equity in the company who raised the money, and more.
      </p>
        </div>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={people01} alt="people" className="w-[50%] h-[50%] px-2 relative z-5" />
      <div>
      <img src={people02} alt="people" className="w-[90%] h-[60%] mt-10 px-6" />
      </div>
      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
    </div>
  </section>
  )
}

export default AboutUs
