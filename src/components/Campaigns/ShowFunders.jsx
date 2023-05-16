import React from 'react'
import { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const ShowFunders = () => {
  const {funders} = useAuth()
  return (
    <div class="bg-white flex border-r-amber-400 rounded-lg font-poppins justify-center items-center overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <h2 class="text-lg font-bold mb-2">List of Funders</h2>
      {funders?.length===0 && <p>No funders here</p> }
      <ul>
        {funders?.map((i)=>{
          return (
            <li class="flex items-center py-2">
            <img class="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150"
             alt="User Avatar" />
            <div class="flex-1">
              <div class="font-bold">Address: {i?.funder}</div>
              <div class="text-gray-600">Contributions: {i?.contribution}</div>
            </div>
          </li>
          )
        })}
       
      
      </ul>
    </div>
  </div>
  )
}

export default ShowFunders
