const Questions = require("../models/questions")

//home
const qHome = async (req, res) => {
    res.set(200).json("Questions home active")
}

//  All Questions
const getAllQuestions = async (req, res) => {
    try {
        questions = await Questions.find()
        if (!questions.length) {
            return(res.status(404).json("Questions not found"))
        }
        res.set(200).json(questions)
    }
    catch (e) {
        res.set(500).json({Error:e})
    }
}

const postQuestions = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "Request body cannot be empty" });
        }

        const question = await Questions.create(req.body); // Fix: Variable name

        res.status(201).json(question); // Fix: Status 201 for resource creation
    } 
    catch (e) {
        res.status(500).json({ error: e.message }); // Fix: Better error handling
    }
};

const deleteOne= async (req, res) => {
    try {
        console.log("delete trigged")

        const { q_no } = req.params;
        const question = await Questions.findOneAndDelete({q_no: q_no});
        if (!question) {
            return res.status(404).json({ 'message': 'Question not found' });
        }
        res.status(200).json({"message":"deleted ",'Question':question});
        
    }
    catch (err) {
        res.status(500).json({ 'message': err.message });

    }
}


module.exports = {
    qHome,
    getAllQuestions,
    postQuestions,
    deleteOne
}