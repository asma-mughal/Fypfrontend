import React from 'react'
import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatTest = () => {
    const user = localStorage.getItem("username")
    const userName = JSON.parse(user)
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
      projectId={"7f104eb5-1daa-4d65-b7df-392071a22a4a"}
      username={userName} // adam
      secret={passwordSecret} // pass1234
      style={{ height: "100%" }}
    />
  </div>
  )
}

export default ChatTest
