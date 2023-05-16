import React, {useState} from 'react'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { useAuth } from '../../contexts/AuthContext';
import { Bar } from 'react-chartjs-2';
const StatsProject = () => {
    const {projectStats} = useAuth()
    const contributionsMap = {};
    projectStats?.forEach((stat) => {
      const { description, contribution } = stat;
      const key = description;
      if (contributionsMap[key]) {
        contributionsMap[key] += contribution;
      } else {
        contributionsMap[key] = contribution;
      }
    });
  
    // Extract the labels and data from the contributions map
    const labels = Object.keys(contributionsMap);
    const data = Object.values(contributionsMap);
    const chartData = {
        labels: labels,
        datasets: [
          {
            label: "Contribution",
            data: data,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0"
            ],
            borderWidth: 1
          }
        ]
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Contribution"
            }
          }
        }
      };
    
   

  return (
    <div>
 <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">

Project Stats             </h2>
{!projectStats && <p className='m-5 font-bold font-poppins'>No Stats to Show</p>}
             <div className='mt-20'>
             <Bar data={chartData} options={options} />

    </div>  </div>
  )
}

export default StatsProject
