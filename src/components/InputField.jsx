import React from 'react'

const InputField = ({type, placeholder, id, autocomplete, name}) => {
  return (
    <input
    autoComplete={autocomplete} 
    required
    name={name}
    class="appearance-none block w-full  bg-gray-50 text-gray-700 border
     rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-poppins" 
     type={type}
     placeholder={placeholder}
     id={id}
    />
  )
}

export default InputField
