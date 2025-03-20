const Questions = require("../models/questions")

//home
const qHome = async (req, res) => {
    res.set(200).json("Questions home active")
}

const getAllQuestions = async (req, res) => {
    try {
        questions = await Questions.find()
        if (!questions.length) {
            return(res.status(404).json("Not found"))
        }
        res.set(200).json(questions)
    }
    catch (e) {
        res.set(500).json({Error:e})
    }
}

module.exports = {
    qHome,
    getAllQuestions
}