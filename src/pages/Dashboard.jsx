import React,{useState} from 'react'
import {Navbar, Hero,AboutUs, Projects, ContactUs, Footer } from '../components/index';
import styles from '../style';
import { useAuth } from '../contexts/AuthContext';
import Bot from '../components/Bot';
import { GoogleLogout } from 'react-google-login';
import SuccessStory from '../components/SuccessStory';
import GetProjects from '../components/Projects/GetProjects';
const Dashboard = ({campaign,setCampaign}) => {
  const [click, setClick] = useState(false)
  const [color, setColor] = useState(false);
  
  return (
    <div className="">
    <Navbar color={color} setColor={setColor} click={click} setClick={setClick} />

    <Hero click={click}  />

        <Projects campaign={campaign} setCampaign={setCampaign} />
        <GetProjects campaign={campaign} setCampaign={setCampaign} />
        <SuccessStory campaign={campaign} setCampaign={setCampaign} />
    <div className={`bg-primary `}>
      <div className={``}>
       <AboutUs />

       <ContactUs />

      </div>
    </div>
    <div className={`bg-primary `}>
      <div className={`${styles.boxWidth}`}>
      
        <Footer />
        </div>
       {/*<button className='bg-white' onClick={handleLogout}>Logout</button> */} 
        </div>
  </div>
  )
}

export default Dashboard
