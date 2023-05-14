import React from 'react'
import Sidebar from '../StackOverflow/Sidebar';
import './index.css';
import MainQuestion from './MainQuestion';
import { useNavigate } from 'react-router-dom';
const ViewIndex = ({question,setQuestion}) => {
  const token = localStorage.getItem("token")
  const newtoken = JSON.parse(token)
  const navigate = useNavigate()
 React.useEffect(()=>{
 if(!newtoken?.value) {
   navigate("/")
 }
 },[newtoken?.value])
  return (
    
    <>
   
    <div className="stack-index">
    <div className="stack-index-content">
     <MainQuestion question={question} setQuestion={setQuestion} />
    </div>
  </div>
  </>
  )
}

export default ViewIndex
