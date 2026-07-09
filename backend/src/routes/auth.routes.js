const express = require("express");
const router = express.Router();
const authController = require("../controlller/auth.controller");
const authLimiter = require("../middlewares/rateLimiter.middleware");

// for register user
router.post("/register", authLimiter.limiter, authController.regiterUser);
// for login user
router.post("/login", authLimiter.loginLimiter, authController.loginUser);
// for refresh token
router.post("/refresh", authController.refreshToken);
// for logout user
router.post("/logout", authController.logoutUser);
module.exports = router;
