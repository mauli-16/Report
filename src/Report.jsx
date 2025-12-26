import React from 'react'
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Bar, Doughnut,Line } from 'react-chartjs-2';
const Report = () => { 
    const [data,setData]=useState(null);
    useEffect(()=>{
      const performanceData=async()=>{
      const res = await fetch("http://localhost:3000/report");
      const record=await res.json()
      setData(record)

      //console.log(data.studentName);
      
    }
    performanceData()
  },[])
    if (!data) {
    return <div>Loading...</div>;
  }
  const goodscore="Excellent performance with strong control."
  const mediumscore="Good performance with minor inaccuracies."
  const lowscore="Needs improvement."
  
  console.log(data.overallScore);
  

  return (
    
    <>
    <div>Student report for {data.studentName}</div>
    <div>{data.overallScore>=8 ? goodscore : data.overallScore>=6?mediumscore:lowscore}</div>
    <div>{data.skills.fluency}</div>
    <div>
      <Bar data={{
        labels:["Pronunciation", "Fluency", "Vocabulary", "Grammar"],
        datasets:[
          {
            label:"Score",
            data:Object.values(data.skills)
          }
        ]
        }}></Bar>
    </div>
    </>
  )
}

export default Report