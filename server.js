const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const data = {
  studentName: "Rahul Sharma",
  testType: "Speaking Assessment",
  overallScore: 10,
  skills: {
    pronunciation: 6.5,
    fluency: 7,
    vocabulary: 7.5,
    grammar: 6,
  },
};
app.get("/report", (req, res) => {
  res.json(data);
});

app.listen(3000, (req, res) => {
  console.log("running");
});
