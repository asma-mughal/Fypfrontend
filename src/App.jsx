import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import { SignIn, Signup, UpdateProfile,ForgotPassword, PasswordUpdate, CampaignPage } from './pages';
import Ruff from './pages/Ruff';
import OTP from './pages/OTP';
import Index from './components/Discussion/StackOverflow';
import QuestionPage from './components/Discussion/AddQuestion';
import ViewIndex from './components/Discussion/ViewQuestion/ViewIndex';
import ProtectedRoute from './components/ProtectedRoute';
import VerifyEmail from './pages/VerifyEmail';
import UserProfile from './pages/UserProfile';
import ChatTest from './components/ChatTest';
import NewPassword from './pages/NewPassword';
import CreateCampaign from './components/Campaigns/createCampaign';
import Donate from './components/Campaigns/Donate';
import CreateProjects from './components/Projects/CreateProjects';
import CreateModule from './components/Projects/CreateModule';
import TestProfile from './components/TestProfile';
import ShowFunders from './components/Campaigns/showFunders';
import UserStats from './components/Campaigns/UserStats';
const App = () => {
const [campaign,setCampaign] = useState({});
const [question,setQuestion] = useState({});
React.useEffect(() => {
  // Get the current timestamp in milliseconds
  const now = new Date().getTime();
  
  // Check if the token exists in localStorage
  const token = localStorage.getItem("token");
  if (token) {
    const { value, expiry } = JSON.parse(token);
    if (expiry && now > expiry) {
      // Token has expired, remove it from localStorage
      localStorage.removeItem("token");
    }
  }
}, []);
  return (
    <> 
    <AuthProvider>
     
<Routes>
   <Route path="/" element={
   <Dashboard campaign={campaign} setCampaign={setCampaign} />} />
    <Route path ="/signin" element={<SignIn />} />
    <Route path ="/signup" element={<Signup />} />
    <Route path="/forgot" element={<ForgotPassword />} />
    <Route path="/ruff" element={<Ruff />} />
    <Route path ="/OTP" element={<OTP />} />
    <Route path='/verify' element={< VerifyEmail />} />
    <Route path='/newpass' element={<NewPassword />} />
    <Route path="/update" element={ <UserProfile />} />
    <Route path="/testChat" element={<ChatTest />} />
    <Route path ="/donate" element={<Donate />} /> 
    <Route path='/pass' element={<PasswordUpdate />} />
    <Route path='/createProject' element={<CreateProjects />} />
    <Route path='/createModule' element={<CreateModule />} />
    <Route path="/testProfile" element={<TestProfile />}   />
    <Route path='/createCampaign' element={<CreateCampaign />} />
    <Route path='/showFundCamp' element={<ShowFunders />} />
    <Route path='/showStatsCamp' element={<UserStats />} />
      <Route path='/projPage' element={<CampaignPage campaign={campaign} setCampaign={setCampaign} />} />
<Route path ="/dis"  element={ <Index  question={question} setQuestion={setQuestion}   />}/>
  <Route path ="/add" element={ <QuestionPage  />} />
  <Route path ="/view" element={<ViewIndex question={question} setQuestion={setQuestion} />} /> 


</Routes>
</AuthProvider>
</>
  )
}

export default App
{/*

<Route path ="/dis"  element={ <ProtectedRoute>
  <Index /></ProtectedRoute>}/>
  <Route path ="/add" element={<ProtectedRoute>
  <QuestionPage /></ProtectedRoute>} />
  <Route path ="/view" element={<ProtectedRoute><ViewIndex /></ProtectedRoute>} /> */}