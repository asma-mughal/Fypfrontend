import React, { useContext, useEffect, useState } from 'react';
import {auth} from '../constants/firebase';
import { Link, Navigate, useNavigate  } from 'react-router-dom';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut,onAuthStateChanged, sendPasswordResetEmail , updateEmail, updatePassword, GoogleAuthProvider,
    signInWithPopup, signInWithRedirect,
} from 'firebase/auth';
import axios from 'axios';
const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({children}) {

    const [showSide, setShowSide] = useState(false);
    const [loading,setLoading] = useState(true); //by default we are loading
    const [googleFb, setGoogleFb] = useState(false);
    const [registermsg, setRegistermsg] = useState({});
    const [success, setSuccess] = useState(false);
    const [OTPmsg,setOTPmsg] = useState({});
    const [socialLogin,setSocialLogin] = useState(false);
    const [testSocialLogin, setTestSocialLogin] = useState(false);
    const [loginsuccess, setLoginSuccess] = useState(false);
    const [loginSuccess2, setLoginSuccess2] = useState(false);
    const [emailVerifySuccess, setEmailVerify] = useState(false);
    const [updatePasswordSuccess, setUpdatePassword] = useState(false);
    const [signUpText, setSignUpText] = useState('');
    const [otpText, setOtpText] = useState('')
    const [maindata, setData] = useState({});
    const token = localStorage.getItem("token")
    const [resetPass, setResetPassword] = useState('');
    const [searchedQuestion, setSearchQuestion] = useState("");
    const [flagSign, setFlagSignUp] = useState(true)
    const [resetpassTwo, setResetPasswordTwo] = useState('');
    const [loginMsg, setLoginMsg] = useState('');
    const [successStories, setSuccessStories] = useState('');
    const [questionList, setQuestionList] = useState([]);
    const [campaings, setCampaigns] = useState([]);
    const [campaignSuccess, setCampaignSuccess] = useState(false);
    const [asnwereList, setAnsList] = useState();
    const [questionMsg, setQuestionMsg] = useState();
    const [userMainId , setUserMainId] = useState();
    const [campaignsRecord, setCampaignRecord] = useState();
    const [simpleCampaign, setSimpleCampaign] = useState();
    const [myCampaign, setMyCampaign] = useState();
    const [funders, setFunders] = useState();
    const [stats, setStats] = useState();
    const [donateMessage, setDonateMessage] = useState(false);
    const [projectsRecord, setProjectsRecord] = useState();
    const [projectsMessage, setProjectMessage] = useState(false);
    const [moduleMessage, setModuleMessage] = useState(false);
    const [donateProjectMessage, setDonateProjectMessage] = useState(false);
    const [projectModules, setProjectModules] = useState();
    const [projectStats, setProjectStats] = useState();
    const [userCampaigns, setUserCampaign] = useState();
    const [userProjects, setUserProjects] = useState();
    const chatUrl ="http://localhost:3001";
    const url ="http://localhost:5000"
    const secondUrl = "http://localhost:3000";
    function signup(email,password,phone,user,address, value, calendar,imageUpload, addr, walletAddress) {
     //console.log(user, email, password, phone, address, value, calendar, imageUpload, addr)
     //setRegistermsg(email)
     fetch(`${url}/api/auth/signup`, {
        method: 'POST',  
        
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user, 
          name:"abc",
          email: email,
          address:address,
          phonenumber:phone,
          password:password,
        // //   user_type:'_',
        // //   device_token:'_',
        // //   role:'user',
        // //   login_type:'manual',
        // //   social_id:'abc',
        // //   active:false,
        //   otp:''
        })
    })//+ setSignUpText(responseData.statusText)
        .then((response) => response.json())
        .then((responseData) => {
            console.log(
                "POST Response",
                "Response Body -> " + JSON.stringify(responseData) + 
                
                alert(responseData.message)  +
                  localStorage.setItem("username", JSON.stringify(user)) + 
                  setSignUpText(responseData.statusText)+
                  localStorage.setItem("emailOtp" , JSON.stringify(responseData.data.email))
            )//signupChat(email, password,user) +
        })
        .catch(error => console.log(error.toString()))
          return success;
    }
    function signupChat(email,password,user) {
        fetch(`${chatUrl}/signup`, {
           method: 'POST',  
           
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             username:user, 
             secret:password, 
             email:email,
             first_name:user,
             last_name:"Abc"
           })
       })
           .then((response) => response.json())
           .then((responseData) => {
               console.log(
                   "POST Response",
                   "Response Body -> " + JSON.stringify(responseData) + 
                   alert(responseData.message)
               )
           })
           .catch(error => console.log(error.toString()))
             return success;
       }
    const getUser  = async() =>{
      const token = localStorage.getItem("token")
      const newtoken = JSON.parse(token)
      
  const response =  await axios.get(`${url}/api/user/me`,
  { headers: {"x-access-token" : `${newtoken.value}`} });
    return response.data.data;
  //const data = await response.json()
  //console.log(data)
    }
    function login(email,password) {
      fetch(`${url}/api/auth/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password:password,
        })
    })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(
                "POST Response",
                "Response Body -> " + 
                JSON.stringify(responseData) + 
                +localStorage.setItem("mainUser",JSON.stringify(responseData.data.user))+
                alert(responseData.message)
                +setLoginMsg(responseData.statusText)
                 + tokenSetting(responseData?.data?.token)
                
            )// +loginChat(password)
        })
        .catch(error => console.log(error.toString()))
       
    }
    function loginChat(password) {
        const user = localStorage.getItem("username")
        const userName = JSON.parse(user)
        fetch(`${chatUrl}/login`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username:userName, 
            secret:password
          })
      })
          .then((response) => response.json())
          .then((responseData) => {
              console.log(
                  "POST Response",
                  "Response Body -> " +  JSON.stringify(responseData) +
                   localStorage.setItem("passwordChat", JSON.stringify(password))
              )
          })
          .catch(error => console.log(error.toString()))
         
      }
    function logout() {
        localStorage.removeItem("username")
        localStorage.removeItem("emailOtp")
        localStorage.removeItem("token")
        localStorage.removeItem("mainUser")
        localStorage.removeItem("passwordChat")
      }
    function sendOTP(OTP) {
        const email =  localStorage.getItem("emailOtp");
        const newEmail = JSON.parse(email)
        fetch(`${url}/api/auth/verify-otp`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:newEmail,
                otp:OTP
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> "+ JSON.stringify(responseData)   +setOtpText(responseData.message) 
                    +alert(responseData.message)             
                )
            })
            .catch(error => console.log(error.toString()))
    }
    function updateFullUser(editData) {
        const token = localStorage.getItem("token")
        const newtoken = JSON.parse(token)
        console.log(newtoken?.value)
        //${url}/api/user/profile
        fetch(`${url}/api/user/profile`, {
         method: 'PUT',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'x-access-token': `${(newtoken?.value)}`
         },
         body: JSON.stringify({
            'name':editData.username,
            // "email" : editData.email,
            'address': editData.address,
            'phone_number': editData.phone_number
         })
     })
         .then((response) => response.json())
         .then((responseData) => {
             console.log(
                 "POST Response",
                 "Response Body -> " + JSON.stringify(responseData) + 
                 alert(responseData.message)
             )
         })
         .catch(error => console.log(error.toString()))
           //return createUserWithEmailAndPassword(auth, email,password)
    }
    
    function updatePass(oldpass, newpassword) {
        const token = localStorage.getItem("token")
        const newtoken = JSON.parse(token)
        fetch(`${url}/api/user/change-password`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': `${(newtoken.value)}`
            },
            body: JSON.stringify({ 
                new_password:newpassword,
                old_password:oldpass
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData) +
                     alert("Congratulations"+responseData.message)+
                     setUpdatePassword(responseData.statusText)
                )
            })
            .catch(error => console.log(error.toString()))
    }
    
    function resetPassword(email){
        console.log(email)
        fetch(`${url}/api/auth/forget-password`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData) 
                    +setResetPassword(responseData.statusText)+ alert(responseData.message)
                )
            })
            .catch(error => console.log(error.toString()))
    }
    function resetPasswordTwo(email, password, otp){
        fetch(`${url}/api/auth/forget-password`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              otp: otp,
              password:password
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData) +alert(responseData.message)
                    + setResetPasswordTwo(responseData.statusText)
                )
            })
            .catch(error => console.log(error.toString()))
    }
    const tokenSetting = (userToken) =>{
        const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000;
        const token = { value:userToken , expiry: expiryTime };
        localStorage.setItem("token", JSON.stringify(token));
    
        // Schedule a timeout to remove the token after 24 hours
        const timeoutId = setTimeout(() => {
          localStorage.removeItem("token");
        }, 24 * 60 * 60 * 1000);
    
        return () => {
          // Clear the timeout if the component unmounts before it's called
          clearTimeout(timeoutId);
        };
    }
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        //signInWithPopup(auth, provider);
        //(signInWithRedirect(auth, provider)
        signInWithPopup(auth, provider).then((result) => {  
         // This gives you a Google Access Token. You can use it to access the Google API.*  
         const credential = GoogleAuthProvider.credentialFromResult(result);  
         const token = credential.accessToken;  
         // The signed-in user info.*  
         const user = result.user;  
        setTestSocialLogin(true)
         localStorage.setItem("socialLogin", JSON.stringify(socialLogin))
        DatabaseSoicalLogin("google", user)
         // ...*  
        })  
        .catch((error) => {  
         // Handle Errors here.*  
         const errorCode = error.code;  
         const errorMessage = error.message;  
         // The email of the user's account used.*  
         const email = error.email;  
         // The AuthCredential type that was used.*  
         const credential = GoogleAuthProvider.credentialFromError(error);  
         // ...*  
        });  
       
        
      };
      
    async function  DatabaseSoicalLogin(type, response) {
        console.log(type,response)
        const socialData = localStorage.getItem("socialData");
        console.log(socialData)
        if(!testSocialLogin && socialData){
            if(response){
                fetch(`${url}/api/auth/signup`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                       "email": type === "facebook" ?response?.email: response?.email,
                       "username":  type === "facebook" ?response?.name:"crazyname",
                       "name":type==='facebook'? response?.name:response?.displayName,
                       "address": "no address",
                       "phonenumber": type === 'facebook'? '12345678':'12345678',
                       "login_type": type,
                       "social_id":type === 'facebook'? response?.userID :response?.uid,
                       "device_token":"9wyeorhfe9r3g4gr4"
                    })
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        console.log(
                            "POST Response",
                            "Response Body -> " + JSON.stringify(responseData) + 
                            alert("Congratulation") +
                             tokenSetting(responseData?.data?.token)+
                             setLoginMsg((responseData?.statusText))+
                             localStorage.setItem("socialData",JSON.stringify(responseData.data.user))
                        )
                    })
                    .catch(error => console.log(error.toString()))
            }
        }
    
       else {
        console.log("already entered record")
       }
        
    }
    
      const googleSignOut = () =>{
        signOut(auth)
	
        .then(function() {
           console.log('Signout Succesfull')
        }, function(error) {
           console.log('Signout Failed')  
        });
      }
    function addQuestion(title,body,category){
        const token = localStorage.getItem("token")
         const newtoken = JSON.parse(token)
         const stringValue = category[0]._id.toString()
         const ids = category.map(record => record._id.toString());
         const payload = {
            "title":title,
            "category_id":ids
          };
          //${url}/api/question/add
          axios.post(`${url}/api/question/add`, payload, {
            headers: {
                'x-access-token': `${newtoken.value}`
              }
          })
            .then(response => {
             console.log(response.data); // Handle the response from the server
             alert(response.data.message)
             setQuestionMsg(response.data.statusText)
            })
            .catch(error => {
              console.log(error); // Handle any errors that occurred during the request
            });
    }
    const getCategoriesForQuestion  = async() =>{
        const token = localStorage.getItem("token")
        const newtoken = JSON.parse(token)

       const response =  await axios.get(`${url}/api/categories`, {
        headers: {"x-access-token" : `${newtoken.value}`}
       });
     return response.data.data
   
    }
      const getAllQuestion  = async() =>{
        axios.post(`${url}/api/question/list`, {
      })
      .then((response) => {
      setQuestionList(response.data.data); 
      })
      .catch((error) => {
        console.log(error); 
      });
          }
        
          function addAnswereToQuestion(title,qstionId){
            const token = localStorage.getItem("token")
            const newtoken = JSON.parse(token)
            fetch(`${url}/api/question/answer`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': `${(newtoken.value)}`
                },
                body: JSON.stringify({
                   
                    question_id: qstionId,
                    answer:title
                })
            })
                .then((response) => response.json())
                .then((responseData) => {
                    console.log(
                        "POST Response",
                        "Response Body -> " + JSON.stringify(responseData) +alert(responseData.message)
                    )
                })
                .catch(error => console.log(error.toString()))
        }      
        const getOneQuestion  = async(id) =>{
           
            const payload = {
                "id":id,
              };
              
              // Make a POST request with Axios
              axios.post(`${url}/api/question/list`, payload)
                .then(response => {
                 setAnsList(response.data.data); // Handle the response from the server
                })
                .catch(error => {
                  console.log(error); // Handle any errors that occurred during the request
                });
                
        }
       //Stories
        const getAllStories  = async() =>{
            const response =  await axios.get(`${secondUrl}/success-stories/get-all-stories`);
            setSuccessStories(response.data.result)
              }
        //Campaigns    
        function campignStore(formValues) {
            const user = localStorage.getItem("mainUser")
            const newUser = (JSON.parse(user))
            const address =   localStorage.getItem("userAddress");
            const seconds = calculateDeadline(formValues.deadline)
            const payload = {
                userId: newUser?._id,
                    title:formValues.title,
                    description:formValues.description,
                    categoryId:formValues.category,
                    deadline:seconds,
                    creator:"0xD13f48CC6E1c4BD51981ff96f7913EA25f632e14",
                    targetFunds:formValues.targetfunds
              };
              axios.post(`${secondUrl}/campaign/create-campaign`, payload)
                .then(response => {
                setCampaignSuccess(response.data.success)
                alert(response.data.message); // Handle the response from the server
                })
                .catch(error => {
                  console.log(error); // Handle any errors that occurred during the request
                });
            
           }
           const getAllCampaigns  = async() =>{
            const payload = {
                userId:"",
                categoryId:""
              };
            const response =  await axios.post(`${secondUrl}/campaign/get-campaigns`, payload);
            setCampaignRecord(response?.data?.campaigns)
              }
              const deployContract =() =>{
              const address =   localStorage.getItem("userAddress");
                fetch(`${secondUrl}/campaign/deploy-campaign-contract`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        creatorAddress:address,
                    })
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        console.log(
                            "POST Response",
                            "Response Body -> " + 
                            JSON.stringify(responseData) +alert(responseData.message)
                            
                        )
                    })
                    .catch(error => console.log(error.toString()))
              }
              const getOneCampaign  = async(id) =>{
                const user = localStorage.getItem("mainUser")
                const newUser = (JSON.parse(user))
                console.log(id)
                const payload = {
                    "userId":"",
                    "campaignId":id
                  };
                  axios.post(`${secondUrl}/campaign/get-campaign`, payload)
                    .then(response => {
                        //console.log(response.data)
                        setSimpleCampaign(response?.data?.campaign)
                    })
                    .catch(error => {
                      console.log(error);
                    });
                    
            }
            const getOneCampaignUser  = async() =>{
                const user = localStorage.getItem("mainUser")
                const newUser = (JSON.parse(user))
                const payload = {
                    "userId":newUser?._id,
                    "categoryId":""
                  };
                  axios.post(`${secondUrl}/campaign/get-campaigns`, payload)
                    .then(response => {
                      
                        //setMyCampaign(response.data)
                    setUserCampaign(response.data.campaigns)
                     //setAnsList(response.data.data);
                    })
                    .catch(error => {
                      console.log(error);
                    });
                    
                    
            }
            const donateFunds = (amount) =>{
                const address = localStorage.getItem("userAddress")
                const user = localStorage.getItem("mainUser")
                const newUser = (JSON.parse(user))
                const userId = (newUser._id)
                const campaignId = localStorage.getItem("cmpId")
                //${secondUrl}/campaign/send-funds
                fetch(`${secondUrl}/campaign/send-funds`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userAddress:address,
                        amount: amount.targetfunds,
                        campaignId: campaignId,
                        userId:userId
                    })
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        console.log(
                            "POST Response",
                            "Response Body -> " + 
                            JSON.stringify(responseData)+alert(responseData.message) +
                             setDonateMessage(responseData.success)
                            
                        )// +loginChat(password)
                    })
                    .catch(error => console.log(error.toString()))
            }
            const withDrawFunds  = async(cmpId) =>{
                const address = localStorage.getItem("userAddress")
                const user = localStorage.getItem("mainUser")
                const newUser = (JSON.parse(user))
                const userId = (newUser._id)
                ///campaign/withdraw-funds
                //${secondUrl}/campaign/withdraw-funds
                fetch(`${secondUrl}/campaign/withdraw-funds`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ownerAddress:"0x8CabBd1D5fD70B2000EA5A15c9257add31444442",
                        campaignId: cmpId,
                        userId:userId
                    })
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        console.log(
                            "POST Response",
                            "Response Body -> " + 
                            JSON.stringify(responseData) +
                            alert(responseData.message)
                            
                        )// +loginChat(password)
                    })
                    .catch(error => console.log(error.toString()))
            }
            const getCampaignFunder = (cmpId) =>{
                const payload = {
                    "campaignId":cmpId,
                  };
                  //${secondUrl}/campaign/get-user-stats
                  axios.post(`${secondUrl}/campaign/get-campaign-funders`, payload)
                    .then(response => {
                     setFunders(response.data.funders)
                    })
                    .catch(error => {
                      console.log(error);
                    });
            }
            const getUserStat = () =>{
                const user = localStorage.getItem("mainUser")
                const newUser = (JSON.parse(user))
                const userId = (newUser._id)
            
                const payload = {
                    "userId":userId,
                  };
                  //${secondUrl}/campaign/get-user-stats
                  axios.post(`${secondUrl}/campaign/get-user-stats`, payload)
                    .then(response => {
                     setStats(response.data.stats)
                    })
                    .catch(error => {
                      console.log(error);
                    });
            }

            /* PROJECTS API */

            function projectStore(formValues) {
                const user = localStorage.getItem("mainUser")
                const newUser = (JSON.parse(user))
                const address =   localStorage.getItem("userAddress");
                const payload = {
                        userId: newUser?._id,
                        creator: "0xD13f48CC6E1c4BD51981ff96f7913EA25f632e14", 
                        title:formValues.title,
                        description:formValues.description,
                        categoryId:formValues.category,
                        imageUrl:formValues.image,
                        targetFunds:formValues.targetfunds,
                        investerId : "20",
                        investerAddress:"0x6e370895E76d79FB764e8d25D75036D9b9fe219c"
                  };
                  //${secondUrl}/project/create-project
                  axios.post(`${secondUrl}/project/create-project`, payload)
                    .then(response => {
                        setProjectMessage(response.data.success)
                    alert(response.data.message); // Handle the response from the server
                    })
                    .catch(error => {
                      console.log(error); // Handle any errors that occurred during the request
                    });
               }
               function createModule(formValues) {
                const user = localStorage.getItem("mainUser")
                const newUser = (JSON.parse(user))
                const address =   localStorage.getItem("userAddress");
                const startDate = calculateDeadline(formValues.startDate);
                const endDate = calculateDeadline(formValues.endDate);
                const payload = {
                        projectId: formValues.category,
                        creator: "0xD13f48CC6E1c4BD51981ff96f7913EA25f632e14", 
                        title:formValues.title,
                        description:formValues.description,
                        startDate:startDate,
                        targetFunds:formValues.targetfunds,
                        endDate:endDate
                  };
                  
                  //${secondUrl}/project/create-module
                  axios.post(`${secondUrl}/project/create-module`, payload)
                    .then(response => {
                    setModuleMessage(response.data.success)
                    alert(response.data.message); // Handle the response from the server
                    })
                    .catch(error => {
                      console.log(error); // Handle any errors that occurred during the request
                    });
               }
               const getAllProjects  = async(id) =>{
                
                const payload = {
                    userId:id ? id : "",
                    categoryId:""
                  };
                const response =  await axios.post(`${secondUrl}/project/get-projects`, payload);
                setProjectsRecord(response?.data?.projects)
                  }
                  const getUserProjects  = async(id) =>{
                
                    const payload = {
                        userId:id ,
                        categoryId:""
                      };
                    const response =  await axios.post(`${secondUrl}/project/get-projects`, payload);
                    //console.log(response.data)
                   setUserProjects(response?.data?.projects)
                      }
                  const getOneProject = async(id) =>{
                        const payload = {
                        projectId:id,
                      };
                    const response =  await axios.post(`${secondUrl}/project/get-project`, payload);
                    setProjectModules(response?.data?.project?.modules)
                      }
                      const donateFundsProjects = (amount) =>{
                        const address = localStorage.getItem("userAddress")
                        const user = localStorage.getItem("mainUser")
                        const newUser = (JSON.parse(user))
                        const userId = (newUser._id)
                        const projectId = localStorage.getItem("prjId")
                        const moduleId = localStorage.getItem("moduleId")
                        //console.log(amount, userId, projectId, moduleId)
                        //${secondUrl}/project/donate-project
                        fetch(`${secondUrl}/project/donate-project`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                projectId:projectId,
                                moduleId:moduleId,
                                userAddress:"0x78Fa5b48258af47d70673F8d02C8b226dD50dD02",
                                amount: amount.targetfunds,
                                userId:userId
                            })
                        })
                            .then((response) => response.json())
                            .then((responseData) => {
                                console.log(
                                    "POST Response",
                                    "Response Body -> " + 
                                    JSON.stringify(responseData)+alert(responseData.message) +
                                     setDonateProjectMessage(responseData.success)
                                    
                                )// +loginChat(password)
                            })
                            .catch(error => console.log(error.toString()))
                    }
                    const withDrawProjectFunds  = async(moduleId) =>{
                        const address = localStorage.getItem("userAddress")
                        const user = localStorage.getItem("mainUser")
                        const newUser = (JSON.parse(user))
                        const userId = (newUser._id)
                        const projectId = localStorage.getItem("prjId")
                        //${secondUrl}/project/withdraw-funds
                        fetch(`${secondUrl}/project/withdraw-funds`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                ownerAddress:"0xD13f48CC6E1c4BD51981ff96f7913EA25f632e14",
                                projectId:projectId,
                                moduleId:moduleId,
                                userId:userId
                            })
                        })
                            .then((response) => response.json())
                            .then((responseData) => {
                                console.log(
                                    "POST Response",
                                    "Response Body -> " + 
                                    JSON.stringify(responseData) +
                                    alert(responseData.message)
                                    
                                )// +loginChat(password)
                            })
                            .catch(error => console.log(error.toString()))
                    } 
                    const getUserProjectStat = () =>{
                        const user = localStorage.getItem("mainUser")
                        const newUser = (JSON.parse(user))
                        const userId = (newUser._id)
                        const payload = {
                            "userId":userId,
                          };
                          //${secondUrl}/campaign/get-user-stats
                          axios.post(`${secondUrl}/project/get-users-stats`, payload)
                            .then(response => {
                                setProjectStats(response.data.stats)
                            })
                            .catch(error => {
                              console.log(error);
                            });
                    }
        useEffect(()=>{
            //at first it'll check whether the user is signIn or not
        const unsubscribe = onAuthStateChanged(auth, ()=>{
            const user = localStorage.getItem("mainUser")
            const newUser = (JSON.parse(user))
            const userId = (newUser?._id)
            setLoading(false)        
        }) 
        return unsubscribe
        },[])
        const calculateDeadline = (newDate) =>{
            const date = new Date(newDate);
            const seconds = date.getTime() / 1000;
            return seconds
        }
    
    const value ={
        signup,
        login,
        logout,
        resetPassword,
        resetPasswordTwo,
        updateFullUser,
        updatePass,
        googleSignIn,
        googleFb, setGoogleFb,
        showSide, setShowSide,
        success,
        registermsg,
    sendOTP,
    OTPmsg,
    socialLogin,setSocialLogin,
    loginsuccess, setLoginSuccess,
    loginSuccess2,
    emailVerifySuccess,
     setEmailVerify,
     updatePasswordSuccess, setUpdatePassword,
     maindata,
     getUser,
     signUpText,
     otpText,
     addQuestion,
     getCategoriesForQuestion,
     getAllQuestion,
     addAnswereToQuestion,
     searchedQuestion, setSearchQuestion,
     DatabaseSoicalLogin,
     testSocialLogin, setTestSocialLogin,
     resetPass,
     resetpassTwo,
     getOneQuestion,
     loginMsg,
     getAllStories,
     successStories,
     campignStore,
     questionList, setQuestionList,
     asnwereList, setAnsList,
     questionMsg,
     getAllCampaigns,
     campaings,
     userMainId , setUserMainId,
     deployContract,
     getOneCampaign,
     donateFunds,
     withDrawFunds,
     getUserStat,
     getCampaignFunder,
     campaignsRecord,
     simpleCampaign,
     myCampaign,
     funders,
     stats,
     projectStore,
     createModule,
     projectsRecord,
     getAllProjects,
     campaignSuccess,
     donateMessage,
     projectsMessage
    ,moduleMessage,
    donateFundsProjects,
    donateProjectMessage,
    getUserProjectStat,
    withDrawProjectFunds,
    getOneProject,
    projectModules,
    projectStats,
    getOneCampaignUser,
    userCampaigns,userProjects,
    getUserProjects
    }
  return (
  <AuthContext.Provider value={value}>
{children}
  </AuthContext.Provider>  
  )
}

