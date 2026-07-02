const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const morgan = require("morgan");
const authUser = require("./routes/auth.routes");
const musicRouter = require("./routes/music.routes");
const app = express();
app.use(express.json());
app.use(compression());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());

app.use("/api/auth", authUser);
app.use("/api/music", musicRouter);

module.exports = app;
