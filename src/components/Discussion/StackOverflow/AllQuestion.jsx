
import { Avatar } from "@material-ui/core";
import React from "react";
import "./css/AllQuestions.css";
import { Link, useNavigate} from "react-router-dom";
import { questions } from "../../../constants/constants";
import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import dateFormat from 'dateformat';
const AllQuestion = ({question,setQuestion}) => {
  const navigate = useNavigate();
  const {getAllQuestion,getUser,searchedQuestion,questionList, setQuestionList} = useAuth()

  const [user, setUser] = useState({})
 const handleClick = (i) =>{
 const questionId = localStorage.setItem("questionId",JSON.stringify(i._id))
 navigate("/view")
 }
 React.useEffect(()=>{
  const fetchData = async() =>{
    const data = await   getAllQuestion();
   
  }
  fetchData()

 },[])
 const token = localStorage.getItem("token")
 const newtoken = JSON.parse(token)
React.useEffect(()=>{
if(!newtoken?.value) {
  navigate("/")
}
},[newtoken?.value])
  return (
    <div className="all-questions font-poppins">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
          
            </div>
            <div className="all-option">
              
            </div>
          
          </div>
        </div>
      <div className="question-answer">
        {questionList?.filter((val)=>{
         if(searchedQuestion === ""){
          return val
         }
         else if(val?.title?.toLowerCase().includes(searchedQuestion.toLowerCase())) {
          return val
         }
        }).map((i)=>{
      
          return(<div>
              <div className="question-answer">
          <div  className=" text-black font-bold
          hover:underline
          "
          onClick={()=>handleClick(i)}
          >{i.title}</div>

          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div><p className="text-gray-500 text-sm">{i.Docs}</p></div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {i.category_id.map((cat)=>{
              return (
                <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#FF7176",
                  borderRadius: "3px",
                  
                }}
              >
            {cat?.title}
              </p>
              )
            })}
            
           
          </div>
          <div className="author">
            <small>{dateFormat((i.createdAt), "mmmm dS, yyyy")} hrs</small>
            <div className="auth-details">
              <Avatar />
              <p>
              {user.username}
              </p>
            </div>
          </div>
        </div>
            </div>)
        }) }
      </div>
      </div>
    </div>
  )
}

export default AllQuestion
