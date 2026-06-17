const express = require('express')
const router = express.Router()
const authController = require('../controlller/auth.controller')


// for register user
router.post("/register",authController.regiterUser )

module.exports = router;