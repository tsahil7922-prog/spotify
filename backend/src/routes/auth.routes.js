const express = require('express')
const router = express.Router()
const authController = require('../controlller/auth.controller')


// for register user
router.post("/register",authController.regiterUser )
router.post("/login",authController.loginUser )
router.post("/refresh", authController.refreshToken);
router.post("/logout", authController.logoutUser);
module.exports = router;