import React from 'react'

const ReadOnlyRow = ({ item, handleEditClick, handleLogout ,handlePassword,handleCampaign,handleProjects}) => {

  return (
    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white
      
      "
    >
      {item?.name}
    </th>
    <td class="">{(item?.email)}</td>
    <td class="py-4 px-6 text-center">{(item?.phone_number)}</td>
    <td class="py-4 px-6 text-center">{(item?.address)}</td>
    <td class="py-4 px-6  flex flex-col justify-center items-center">
      <button
        type="button"
        className="group relative flex
        cursor-pointer
                w-40  justify-center rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={(event) => handleEditClick(event, item)}
      >
        {("Edit")}
      </button>
      <button
        type="button"
        className="group relative flex
        cursor-pointer
                w-40 justify-center mt-5 rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={(e)=>handlePassword(e)}
      >
        {("Change Password")}
      </button>
      <button
        type="button"
        className="group relative flex
        cursor-pointer
                w-40 justify-center mt-5 rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={(e)=>handleCampaign(e)}
      >
        {("Create Campaign")}
      </button>
      <button
        type="button"
        className="group relative flex
        cursor-pointer
                w-40 justify-center mt-5 rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={(e)=>handleProjects(e)}
      >
        {("Create Projects")}
      </button>
    </td>
  </tr>
  )
}

export default ReadOnlyRow
