const Answers = require("../models/answers.model")


//home
const gethome = async(req, res)=> {
    res.status(200).json("welcome to home route")
}
// post answers
const postAnswer =async (req, res) => {
    try {
        console.log("post trigged")

        const answers = await Answers.create(req.body)
        res.status(200).json(answers)
        
    }
    catch (err) {
        res.status(500).json({'message': err.message});
    }
}

// get all answers
const getAllAnswers= async (req, res) => {
    try {
        console.log("get trigged")

        const answers = await Answers.find({});
        res.status(200).json(answers);
    }
    catch (err) {
        res.status(500).json({'message': err.message});
    }
}

// get selected id
const getOneAnswerById= async (req, res) => {
    try {
        console.log("get trigged")
        const answer = await Answers.findById(req.params.id);
        if (!answer) {
            return res.status(404).json({ message: "Answer not found" });
        }
        res.status(200).json(answer);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const getOneAnswerByKey= async (req, res) => {
    try {
        console.log("get trigged")

        const { st_id, an_no } = req.params
        const answer = await Answers.findOne({ stud_id: st_id, ans_no: an_no })
        if (!answer) {
            return res.status(404).json("Answer not found")
        }
        res.status(200).json(answer)
        
    }
    catch (e) {
        res.status(500).json({message:e.message})
        
    }
}

// Delete one By key
const deleteOneByKey= async (req, res) => {
    try {
        console.log("delete trigged")

        const { st_id,an_no } = req.params;
        const answer = await Answers.findOneAndDelete({stud_id: st_id,ans_no: an_no });
        if (!answer) {
            return res.status(404).json({ 'message': 'Answer not found' });
        }
        res.status(200).json({"message":"deleted ",'answer':answer});
        
    }
    catch (err) {
        res.status(500).json({ 'message': err.message });

    }
}

//  Update one by key
const putOneByKey= async (req, res) => {
    try {
        console.log("update trigged")
        const { stud_id, ans_no } = req.params;
        const answer = await Answers.findOneAndUpdate({ stud_id, ans_no }, req.body)
        if (!answer) {
            res.status(404).json({'text-Error':"No answer found"})
        }
        const update_ans = await Answers.findOne({ stud_id, ans_no });
        res.status(200).json(update_ans)
    }
    catch (e) {
        res.status(500).json({ 'message':e.message})
        
    }
}

module.exports = {
    gethome,
    getAllAnswers,
    getOneAnswerById,
    getOneAnswerByKey,
    postAnswer,
    putOneByKey,
    deleteOneByKey

}