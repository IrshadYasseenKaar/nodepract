const express = require('express')
const {qHome,getAllQuestions} = require("../controllers/questions.controller")
const router = express.Router();

router.get('/',qHome)
// router.get("/all", getAllQuestions)
// router.get("/:id", getOneAnswerById)
// // router.get("/:st_id/:an_no", getOneAnswerByKey)

// router.post("/all", postAnswer)

// router.put("/:st_id/:an_no", putOneByKey)

// router.delete("/:st_id/:an_no", deleteOneByKey)

module.exports= router