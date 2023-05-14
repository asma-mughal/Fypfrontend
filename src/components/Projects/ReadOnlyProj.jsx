import React from 'react'

const ReadOnlyProj = ({item,widthDrawFunds,getUserStats,getCampaignFunders,handleCampaign}) => {
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
                 hover:text-black hover:border-secondary"
        onClick={(event) => widthDrawFunds(event, item)}
      >
        {("Show Modules")}
      </button>
      <button
        type="button"
        className="group relative flex
        cursor-pointer
                w-48 justify-center rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary"
        onClick={(event) => widthDrawFunds(event, item)}
      >
        {("WithDraw Funds")}
      </button>
      <button
        type="button"
        className="group relative flex
        cursor-pointer mt-5
                w-48 justify-center rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary
                  "
        onClick={(event) => getUserStats(event, item)}
      >
        {("Get User Stats")}
      </button>
      <button
        type="button"
        className="group relative flex
        cursor-pointer
        mt-5
                w-48 justify-center rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary"
        onClick={(event) => getCampaignFunders(event, item)}
      >
        {("Get Campaign Funders")}
      </button>
      <button
        type="button"
        className="group relative flex
        cursor-pointer
        mt-5
                w-48 justify-center rounded-md border border-transparent bg-secondary
                 py-1 px-2 text-sm font-medium text-white hover:bg-white
                 hover:text-black hover:border-secondary"
        onClick={(event) => handleCampaign(event, item)}
      >
        {("Create Campaign")}
      </button>
    </td>
  </tr>
  )
}

export default ReadOnlyProj
