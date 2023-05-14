import './index.css';
import React,{useState} from 'react'
import { useQuill } from 'react-quilljs';
import TagInput from './TagInput';
import 'quill/dist/quill.snow.css'; 
import { useNavigate  } from "react-router-dom";
import { useAuth } from '../../../contexts/AuthContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'
import { useEffect } from 'react';
const QuestionPage = () => {
 
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);
  const [wrritten, setWritten] = useState('');
  const [categories,setCategories] = useState([])
  const navigate = useNavigate();
  const {addQuestion,getCategoriesForQuestion,questionMsg} = useAuth()
    
  const handleQuill = (value, delta, source, editor) => {
    const text = editor.getText(value);
      setWritten(text)
    setBody(value)
  };
  const { quill, quillRef } = useQuill();
  const [value,setValue]=useState();
useEffect(()=>{
   if(questionMsg === "SUCCESS") {
    navigate("/dis")
   }
},[questionMsg])
  // React.useEffect(() => {
  //     if (quill) {
  //       quill.on('text-change', () => {
  //         console.log(quillRef.current.firstChild.innerHTML);
  //         setValue(quillRef.current.firstChild.innerHTML)
  //       });
  //     }
  //   }, [quill]);
    React.useEffect(()=>{
      const fetchCategories = async() =>{
       const data =await getCategoriesForQuestion()
       setCategories(data)
      }
       fetchCategories()
    },[])
    const handleSubmit = (e) =>{
      e.preventDefault();
      addQuestion(title, wrritten, categories)
      }
      const token = localStorage.getItem("token")
      const newtoken = JSON.parse(token)
     React.useEffect(()=>{
     if(!newtoken?.value) {
       navigate("/")
     }
     },[newtoken?.value])
  return (
    <>
   
    <div className="add-question font-poppins">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask a public question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imagine you’re asking a question to another
                  person
                </small>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g Is there an R function for finding teh index of an element in a vector?"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question
                </small>
                <ReactQuill
                value={body} onChange={handleQuill}
                className="react-quill" theme="snow" />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Categories</h3>
                <small>
                  Add tag to describe what your question is about
                </small>
                {/* <input
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  data-role="tagsinput"
                  data-tag-trigger="Space"
                  type="text"
                  placeholder="e.g. (asp.net-mvc php react json)"
                /> */}

                <TagInput
                  value={tag}
                  onChange={setTag}
                  name="fruits"
                  categories={categories}
                  setCategories={setCategories}
                  placeHolder="press enter to add new tag"
                />

                {/* <ChipsArray /> */}
              </div>
            </div>
          </div>
        </div>

        <button onClick={handleSubmit} style={{
        backgroundColor:'#FF4A51',
        justifyItems:'center',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        display:'flex',
        padding:'0.5rem',
        borderRadius:'3rem',   
    }} className="button">
          <text className={`font-poppins text-sm text-bold text-center text-white font-bold `}>
            Add Your Question</text>
        </button>
      </div>
    </div>
    </>
  )
}

export default QuestionPage
