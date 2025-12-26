import React from 'react'

const Report = () => {
    const performanceData=async()=>{
      const res = await fetch("http://localhost:3000/report");
      const data=await res.json()
      console.log(data);
      
    }
    performanceData()
  return (
    
    
    <div>reportt
      
    </div>
  )
}

export default Report