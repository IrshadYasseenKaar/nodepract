const express = require('express')
const {gethome,getAllAnswers, getOneAnswerById, getOneAnswerByKey, postAnswer, putOneByKey, deleteOneByKey} = require("../controllers/answers.controller")
const router = express.Router();

router.get('/',gethome)
router.get("/all", getAllAnswers)
router.get("/:id", getOneAnswerById)
router.get("/:st_id/:an_no", getOneAnswerByKey)

router.post("/all", postAnswer)

router.put("/:st_id/:an_no", putOneByKey)

router.delete("/:st_id/:an_no", deleteOneByKey)

module.exports= router