import React from 'react'

const ReadOnlyProj = ({item,withdDrawProjectFunds,getUserStatsProject,handleModules,createModule}) => {
  return (

    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white
      
      "
    >
      {item?.title}
    </th>
    <td class="">{(item?.description)}</td>
    <td class="py-4 px-6 text-center">{(item?.projectFunds?.targetFunds)}</td>
    <td class="py-4 px-6 text-center">{(item?.projectFunds?.raisedFunds)}</td>
    <td class="py-4 px-6 text-center">{(item?.projectFunds?.remainingFunds)}</td>
    <td class="py-4 px-6 text-center">{(item?.imageUrl)}</td>
     
    <td class="py-4 px-6  flex flex-col justify-center items-center">
    <button
        type="button"
        className="group relative flex
        cursor-pointer mb-5
                w-48 justify-center rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  "
        onClick={(event) => createModule(event, item)}
      >
        {("Create Module")}
      </button>
    <button
        type="button"
        className="group relative flex
        cursor-pointer mb-5
                w-48 justify-center rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary"
        onClick={(event) => handleModules(event, item?.projectId)}
      >
        {("Show Modules")}
      </button>
    
      <button
        type="button"
        className="group relative flex
        cursor-pointer 
                w-48 justify-center rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  "
        onClick={(event) => getUserStatsProject(event, item)}
      >
        {("Get User Stats")}
      </button>
     
     
    </td>
  </tr>
  )
}

export default ReadOnlyProj
