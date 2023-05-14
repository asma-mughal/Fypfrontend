import React from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { useAuth } from '../../contexts/AuthContext';
const UserStats = () => {
  const {stats} = useAuth()
  const data = {
    labels: stats ? stats.map((stat) => stat.timestamp) : [],
    datasets: [
      {
        label: "Total Funds Donated",
        data: stats ? stats.map((stat) => (stat.isFundsDonating ? stat.contribution : 0)) : [],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Total Funds Withdrawn",
        data: stats ? stats.map((stat) => (!stat.isFundsDonating ? stat.contribution : 0)) : [],
        fill: false,
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Time (Days)",
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Money (USD)",
          },
        },
      ],
    },
  };


 
  return (
    <div>
 <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">

User Stats             </h2>
             <div className='mt-20'>
             <Line data={data} options={options} />;

    </div>  </div>
  )
}

export default UserStats
