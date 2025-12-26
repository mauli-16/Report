import React from 'react'
import './Report.css'
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
  <div className="container">
    <h2 className="heading">
      Student Report: {data.studentName}
    </h2>

    <div className="card">
      <h3>Overall Score</h3>
      <p className="score">{data.overallScore} / 9</p>
      <p className="feedback">
        {data.overallScore >= 8
          ? goodscore
          : data.overallScore >= 6
          ? mediumscore
          : lowscore}
      </p>
    </div>

    <div className="card">
      <h3>Skill-wise Scores</h3>

      <div className="skill">
        <span>Pronunciation</span>
        <span>{data.skills.pronunciation}</span>
      </div>
      <div className="skill">
        <span>Fluency</span>
        <span>{data.skills.fluency}</span>
      </div>
      <div className="skill">
        <span>Vocabulary</span>
        <span>{data.skills.vocabulary}</span>
      </div>
      <div className="skill">
        <span>Grammar</span>
        <span>{data.skills.grammar}</span>
      </div>
    </div>

    <div className="card">
      <h3>Score Overview</h3>
      <Bar
        data={{
          labels: ["Pronunciation", "Fluency", "Vocabulary", "Grammar"],
          datasets: [
            {
              label: "Score",
              data: Object.values(data.skills),
            },
          ],
        }}
      />
    </div>
  </div>
);

}

export default Report