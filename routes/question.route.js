const express = require('express')
const router = express.Router();
const { getAllQuestions, qHome } = require('../controllers/questions.controller')

router.get('/', qHome)
router.get('/all', getAllQuestions)
module.exports=router