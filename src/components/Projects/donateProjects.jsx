import React, {useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
const DonateProjects = () => {
    const {donateFundsProjects,donateProjectMessage, donateMessage} = useAuth();
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        targetfunds: "",
      });
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        donateFundsProjects(formValues)
        setFormValues({
            ...formValues,
            targetfunds: "",
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
      if(donateProjectMessage){
        navigate("/")
      }
     },[donateProjectMessage])
  return (
    <section class="max-w-4xl p-6 mx-auto bg-nuetral-50 rounded-md font-poppins shadow-md dark:bg-gray-800 mt-20">
    <h1 class="text-xl font-bold text-black capitalize dark:text-white">Donate Here</h1>
    <form onSubmit={handleSubmit}>
        <div class="w-full mt-4 sm:grid-cols-2">
            <div>
                <label class="text-black w-full dark:text-gray-200" for="username">Target Funds</label>
                <input 
 type="number"
 id="targetfunds"
 name="targetfunds"
 value={formValues.targetfunds}
 onChange={handleInputChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>

        </div>

        <div class="flex justify-end mt-6">
        <button
           type="submit"
                  className="bg-secondary border-secondary w-full font-poppins rounded-3xl border p-2
                   text-white transition font-bold "
                >
                Donate
                </button>
        </div>
    </form>
</section>
  )
}

export default DonateProjects
