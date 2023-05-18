import React from 'react'
import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatTest = () => {
    const user = localStorage.getItem("username")
    const password = localStorage.getItem("passwordChat")
    const passwordSecret = JSON.parse(password)
    const token = localStorage.getItem("token")
    const newtoken = JSON.parse(token)
   React.useEffect(()=>{
   if(!newtoken?.value) {
     navigate("/")
   }
   },[newtoken?.value])
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
    <PrettyChatWindow
      projectId={"6a9b6de7-9252-4d67-8906-8bb28c85610a"}
      username={user} // adam
      secret={passwordSecret} // pass1234
      style={{ height: "100%" }}
    />
  </div>
  )
}

export default ChatTest
