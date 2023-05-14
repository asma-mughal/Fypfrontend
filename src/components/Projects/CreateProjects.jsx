import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
const CreateProjects = () => {
    const { getCategoriesForQuestion, projectStore,userMainId } = useAuth()
    const [categories, setCategories] = useState();
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchCategories = async() =>{
         const data =await getCategoriesForQuestion()
         setCategories(data)
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
      });
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
  return (
    <section class="max-w-4xl p-6 mx-auto bg-nuetral-50 rounded-md font-poppins shadow-md dark:bg-gray-800 mt-20">
    <h1 class="text-xl font-bold text-black capitalize dark:text-white">Create Projects</h1>
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
            <div className=''>
                <label class="block text-sm font-medium text-black">
                Image
              </label>
              <div class="mt-3 flex justify-center border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto my-5 h-6 w-6 text-black" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative ml-32 cursor-pointer bg-white rounded-md font-medium text-gray-500 hover:text-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="text-center">{formValues?.imageUrl ? 'File uploaded' : ' Upload a file'}  </span>
                      <input id="file-upload"    name="image"
        onChange={handleImageChange} type="file" class="sr-only" />
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
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
