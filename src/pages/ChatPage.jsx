import React from 'react';
import Chat from '../components/Chat/Chat';
import "../App.scss";
import { Sidebar } from '../components';
import { useContext } from 'react';
import { ChatContext } from '../contexts/ChatContext';

const ChatPage = () => {
 
  return (
<div className='home'>
      <div className="container shadow-2xl">
        <Sidebar />
         <Chat/>
        
      </div>
    </div>
  )
}

export default ChatPage
