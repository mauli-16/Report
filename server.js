const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
app.get('/report',(req,res)=>{
    res.json(data);
    
})

const data={
  "studentName": "Rahul Sharma",
  "testType": "Speaking Assessment",
  "overallScore": 7,
  "skills": {
    "pronunciation": 6.5,
    "fluency": 7,
    "vocabulary": 7.5,
    "grammar": 6
  }
}
app.listen(3000,(req,res)=>{
    console.log('running');  
})