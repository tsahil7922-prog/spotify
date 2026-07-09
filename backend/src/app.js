const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet"); //helmet is a middleware that helps to secure your Express apps by setting various HTTP headers. It can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
const compression = require("compression");
const morgan = require("morgan");
const authUser = require("./routes/auth.routes");
const musicRouter = require("./routes/music.routes");
const app = express();
app.use(express.json()); // to parse incoming requests with JSON payloads
app.use(helmet());
app.use(compression()); // compress api response to reduce size of data being sent over the network
app.use(morgan("dev")); // in console giving each api info that runs
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);
app.use(cookieParser());

app.use("/api/auth", authUser);
app.use("/api/music", musicRouter);

module.exports = app;
