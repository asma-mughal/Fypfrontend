import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import DatePicker from 'react-datepicker';
const CreateModule = () => {
    const {  moduleMessage,getAllProjects , projectsRecord, createModule} = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchCategories = async() =>{
         const data =await getAllProjects()
        }
         fetchCategories()
      },[])
      const [formValues, setFormValues] = useState({
        title: "",
        description: "",
        imageUrl: "",
        targetfunds: "",
        category: '0',
        startDate:"",
        endDate:""
      });
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        createModule(formValues)
        setFormValues({
            ...formValues,
            title: "",
            description: "",
            imageUrl: "",
            targetfunds: "",
            category: "",
            startDate:"",
            endDate:""
        })
      };
      const token = localStorage.getItem("token")
      const newtoken = JSON.parse(token)
     React.useEffect(()=>{
     if(!newtoken?.value) {
       navigate("/")
     }
     },[newtoken?.value])
     React.useEffect(()=>{
     if(moduleMessage){
      navigate("/")
     }
     },[moduleMessage])
  return (
    <section class="max-w-4xl p-6 mx-auto bg-nuetral-50 rounded-md font-poppins shadow-md dark:bg-gray-800 mt-20">
    <h1 class="text-xl font-bold text-black capitalize dark:text-white">Create Module For Projects</h1>
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
                <label class="text-black dark:text-gray-200" for="passwordConfirmation">Select</label>
                <select 
                name="category"
                value={formValues.category}
                onChange={handleInputChange}
                class="block w-full px-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                {projectsRecord?.map((category) => (
                    
          <option key={category?.projectId} value={category?.projectId}>
            {category?.title}
          </option>
        ))}
                </select>
            </div>
            <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="startDate">
            Start Date
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="startDate"
            type="date"
            name='startDate'
            value={formValues.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="endDate">
            End Date
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="endDate"
            type="date"
            name="endDate"
            value={formValues.endDate}
            onChange={handleInputChange}
          />
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
                  Create Module
                </button>
        </div>
    </form>
</section>
  )
}

export default CreateModule
