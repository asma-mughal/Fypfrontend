import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HistoryIcon from "@material-ui/icons/History";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 
import "./index.css";
import { asnweres } from "../../../constants/constants";
import ReactQuill from 'react-quill';
import { useAuth } from "../../../contexts/AuthContext";
const MainQuestion = ({question,setQuestion}) => {
//     let search = window.location.search;
//     console.log(question)
//   const params = new URLSearchParams(search);
//   const id = params.get("q");
// console.log(question)
  const [questionData, setQuestionData] = useState();
  const [answer, setAnswer] = useState([]);
  const [show, setShow] = useState(false);
  const { quill, quillRef } = useQuill();
  const [value,setValue]=useState();
  const qestionId = localStorage.getItem('questionId')
  const {addAnswereToQuestion,getOneQuestion,asnwereList} = useAuth()
  React.useEffect(() => {
      if (quill) {
        quill.on('text-change', () => {
          console.log(quillRef.current.firstChild.innerHTML);
          setValue(quillRef.current.firstChild.innerHTML)
        });
      }
    }, [quill]);
   
  const handleSubmit = (e) =>{
    e.preventDefault()
    //console.log(wrritten, JSON.parse(qestionId))
    addAnswereToQuestion(wrritten,JSON.parse(qestionId))
    
  }

  useEffect(()=>{
    //getSingleQuestion
    const questionId =JSON.parse(localStorage.getItem("questionId")) 
    getOneQuestion(questionId)
  },[asnwereList])
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);
  const [wrritten, setWritten] = useState('');
  const handleQuill = (value, delta, source, editor) => {
    const text = editor.getText(value);
      setWritten(text)
    setBody(value)
  };
  const [comment, setComment] = useState("");
  // const [comments, setComments] = useState([]);
  return (
    <div className="main font-poppins">
      <div className="main-container">
        <div className="main-top ">
          {asnwereList?.map((i)=>{
          return ( <p className="main-question">{i?.title}</p>)
          })}
         
          <Link to="/add">
            <button className="bg-secondary p-2 w-28 rounded-xl">
            <text className={`font-poppins text-xs text-bold text-center text-white font-bold `}>
            Ask Question</text>
            </button>
          </Link>
        </div>
       
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
            </div>
            <div className="question-answer">
              
              <p>{question.Docs}</p>

              
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all-questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
             Answers
          </p>
          {asnwereList?.map((i)=>{
            return (
              i?.answers?.map((ans)=>{
                return (   
                  
                  <div
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                  className="all-questions-container"
                >
               
                  <div className="all-questions-left">
                    <div className="all-options">
                      <p className="arrow">▲</p>
  
                      <p className="arrow">0</p>
  
                      <p className="arrow">▼</p>
  
                      <BookmarkIcon />
  
                      <HistoryIcon />
                    </div>
                  </div>
                  <div className="question-answer">
         {ans?.answer}
                    <div className="author">
                      <small>
                        asked
                      </small>
                      <div className="auth-details">
                        <Avatar />
                        <p>
                       Username here
                        </p>
                      </div>
                    </div>
                  </div>
                </div>)
              })
            )
              
             })}
      
        </div>
     
      </div>
      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <ReactQuill
                value={body} onChange={handleQuill}
                className="react-quill" theme="snow" />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "10rem",
          maxWidth: "fit-content",
          backgroundColor:"#FF4A51",
          padding:'8px',
          borderRadius:'19px',
          color:'white',
          
        }}
      >
        Post your answer
      </button>
    </div>
  )
}

export default MainQuestion
