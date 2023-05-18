
import { Avatar } from "@material-ui/core";
import React,{useEffect} from "react";
import "./css/AllQuestions.css";
import { Link, useNavigate} from "react-router-dom";
import { questions } from "../../../constants/constants";
import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import dateFormat from 'dateformat';
const AllQuestion = ({question,setQuestion}) => {
  const navigate = useNavigate();
  const {getAllQuestion,getUser,searchedQuestion,questionList, setQuestionList,getUserId,userQuestionName} = useAuth()
  
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
 const [user, setUser] = useState(null)

const fetchUser = async (userId) => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/api/user/${userId}`);

    if (response.ok) {
      const userData = await response.json();
      return userData?.data;
    } else {
      console.error('Failed to fetch user data');
      return null;
    }
  } catch (error) {
    console.error('Error while fetching user data', error);
    return null;
  }
};

const fetchUsers = async () => {
  const updatedQuestionList = await Promise.all(
    questionList?.map(async (question) => {
      const user = await fetchUser(question?.user_id);
      return { ...question, user };
    })
  );
  setQuestionList(updatedQuestionList);
  setUser(updatedQuestionList)
};

useEffect(() => {

  fetchUsers();
}, []);


 const token = localStorage.getItem("token")
 const newtoken = JSON.parse(token)
React.useEffect(()=>{
if(!newtoken?.value) {
  navigate("/")
}
},[newtoken?.value])
// question.user_id
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
              {user?.map((ques)=>{
                return (
                  <p>
                  {ques?.user?._id === i.user_id &&   ques?.user?.name }
                  </p>
                )
              })}
            
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
