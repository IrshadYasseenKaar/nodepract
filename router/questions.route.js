const express = require('express')
const {qHome,getAllQuestions,postQuestions,deleteOne} = require("../controllers/questions.controller")
const router = express.Router();

router.get('/',qHome)
router.get("/all", getAllQuestions)
// router.get("/:id", getOneAnswerById)
// // router.get("/:st_id/:an_no", getOneAnswerByKey)

 router.post("/all", postQuestions)

// router.put("/:st_id/:an_no", putOneByKey)

router.delete("/:q_no", deleteOne)

module.exports= router