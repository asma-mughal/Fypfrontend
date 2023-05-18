import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
const CreateProjects = () => {
    const { getCategoriesForQuestion, projectStore,userMainId, projectsMessage,getAllUser } = useAuth()
    const [categories, setCategories] = useState();
    const [userData, setUserData] = useState();
    const user = localStorage.getItem("mainUser")
    const newUser = (JSON.parse(user))
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchCategories = async() =>{
         const data =await getCategoriesForQuestion()
         setCategories(data)
         const userData = await getAllUser();
         setUserData(userData)
        }
         fetchCategories()
      },[])
    
      const [formValues, setFormValues] = useState({
        title: "",
        description: "",
        imageUrl: "",
        deadline: "",
        targetfunds: "",
        category: "",
        equity:"",
        user: ''
      });
      useEffect(() => {
        if (userData?.length > 0) {
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            user: userData[0]?._id
          }));
        }
      }, [userData]);
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        projectStore(formValues)
        setFormValues({
            ...formValues,
            title: "",
            description: "",
            imageUrl: "",
            targetfunds: "",
            category: "",
            equity:"",
            user:""
        })
      };
      const handleImageChange = (event) => {
        const image = event.target.files[0];
    setFormValues({ ...formValues, image });
      };
      const token = localStorage.getItem("token")
      const newtoken = JSON.parse(token)
     React.useEffect(()=>{
     if(!newtoken?.value) {
       navigate("/")
     }
     },[newtoken?.value])
     React.useEffect(()=>{
      if(projectsMessage){
        navigate("/")
      }
     },[projectsMessage])
  return (
    <section class="max-w-4xl p-6 mx-auto bg-nuetral-50 rounded-md font-poppins shadow-md dark:bg-gray-800 mt-20">
    <h1 class="text-xl font-bold text-black capitalize dark:text-white">Start Project</h1>
    <form onSubmit={handleSubmit}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-black dark:text-gray-200" for="username">Title</label>
                <input  id="title" type="text" 
                   name="title"
                   value={formValues.title}
                   onChange={handleInputChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border 
                border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300
                 dark:border-gray-600 focus:border-blue-500 " />
            </div>
            <div>
                <label class="text-black dark:text-gray-200" for="username">Equity</label>
                <input  id="title" type="text" 
                   name="equity"
                   value={formValues.equity}
                   onChange={handleInputChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border 
                border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300
                 dark:border-gray-600 focus:border-blue-500 " />
            </div>
            <div>
                <label class="text-black dark:text-gray-200" for="username">Target Funds</label>
                <input 
 type="number"
 id="targetfunds"
 name="targetfunds"
 value={formValues.targetfunds}
 onChange={handleInputChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
         
            <div>
                <label class="text-black dark:text-gray-200" for="passwordConfirmation">Investor</label>
                <select 
                name="user"
                value={formValues.user}
                onChange={handleInputChange}
                class="block w-full px-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                {userData?.map((category) => 
                (
                  
          <option key={category?._id} value={category?._id}>
            {newUser?.username===category?.username? null :category?.username }
          </option>
        ))}
                </select>
            </div>
            <div>
                <label class="text-black dark:text-gray-200" for="passwordConfirmation">Categories</label>
                <select 
                name="category"
                value={formValues.category}
                onChange={handleInputChange}
                class="block w-full px-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                {categories?.map((category) => (
          <option key={category?._id} value={category?._id}>
            {category?.title}
          </option>
        ))}
                </select>
            </div>
           
            <div>
                <label class="text-black dark:text-gray-200" 
                
                >Description</label>
                <textarea id="textarea" type="textarea" 
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
                class="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
      
        </div>

        <div class="flex justify-end mt-6">
        <button
           type="submit"
                  className="bg-secondary border-secondary w-full font-poppins rounded-3xl border p-2
                   text-white transition font-bold "
                >
                  Create Project
                </button>
        </div>
    </form>
</section>
  )
}

export default CreateProjects
