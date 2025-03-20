const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const answerRoute = require('./routes/answers.route');
const questionRoute = require('./routes/question.route')

dotenv.config();
const app = express();
const uri = process.env._MONGO_cs_1;

// middleware for json
app.use(express.json())
app.use("/api/answers",answerRoute)
app.use("/api/questions",questionRoute)

// Connect to MongoDB
mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err.message);
});

// Define a route
// listen 3000
app.listen(3000, () => {
    console.log('Server listening on port 3000!');
});

app.get('/', (req, res) =>
{
    res.send("api route routing")
})

// // it dosent matter if in url there is sid and in values stuid since req.params gets values
// app.get("/api/answers/:s_id/:a_no", async (req, res) => {
//     try {
//         console.log("get trigged")

//         const { s_id, a_no } = req.params
//         const answer = await Answers.findOne({ stud_id: s_id, ans_no: a_no })
//         if (!answer) {
//             return res.status(404).json("Answer not found")
//         }
//         res.status(200).json(answer)
        
//     }
//     catch (e) {
//         res.status(500).json({message:e.message})
        
//     }
// })

