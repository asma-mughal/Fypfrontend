import React from 'react'
import styles from '../../style';
import { pakPhoneRegex } from '../../constants/constants';
const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
    item,
    onSelectFile,
    onUpdateSelectFile,
    
  }) => {
  return (
    <tr class="border-b bg-white">
  <td class="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
  <input
        type="text"
        required="required"
        className={`${styles.inputauth}`}
        placeholder="Username"
        name="username"
        value={editFormData.username}
        onChange={handleEditFormChange}
      />
  </td>
 
  <td class="py-4 px-6 text-center">
  <input
        type="email"
        required="required"
        className={`${styles.inputauth}`}
        placeholder="Email Address"
        name="email"
        value={editFormData.email}
        onChange={()=>alert("Email couldn't be changed")}
      />
  </td>
  <td class="py-4 px-6 text-center">
  <input
        type="text"
        required="required"
        pattern={pakPhoneRegex || interRegex}
        className={`${styles.inputauth}`}
        placeholder="Phone Number"
        name="phone_number"
        value={editFormData.phone_number}
        onChange={handleEditFormChange}
      />
  </td>
  <td class="py-4 px-6 text-center">
  <input
        type="text"
        required="required"
        className={`${styles.inputauth}`}
        placeholder="Address"
        name="address"
        value={editFormData.address}
        onChange={handleEditFormChange}
      />
  </td>
  <td class="text-sm text-gray-900 font-light px-3 flex flex-col justify-center items-center
   py-4 whitespace-nowrap">
  <button
      
        className="group relative flex
        cursor-pointer
                w-20 justify-center rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >{("Save")}</button>
      <button
        type="button"
        className="group relative flex
        mt-2
        cursor-pointer
                w-20 justify-center rounded-md border border-transparent bg-secondary
                py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleCancelClick}
      >{("Cancel")}</button>
          
  </td>
  </tr>
  )
}

export default EditableRow
