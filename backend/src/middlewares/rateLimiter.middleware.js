const rateLimiter = require("express-rate-limit");

const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 5, // Limit each IP to 100 requests per window
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-Rate-Limit-*` headers
});

const loginLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    error: "Too many requests. Please try again later.",
  },

  standardHeaders: true,
});
module.exports = { limiter, loginLimiter };
