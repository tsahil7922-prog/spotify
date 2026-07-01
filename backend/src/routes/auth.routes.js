const express = require("express");
const router = express.Router();
const authController = require("../controlller/auth.controller");
const authLimiter = require("../middlewares/rateLimiter.middleware");

// for register user
router.post("/register", authLimiter.limiter, authController.regiterUser);
router.post("/login", authLimiter.loginLimiter, authController.loginUser);
router.post("/refresh", authController.refreshToken);
router.post("/logout", authController.logoutUser);
module.exports = router;
