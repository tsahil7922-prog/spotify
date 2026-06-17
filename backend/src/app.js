const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config(); // to acees .env file variables
// schema and model
const postModel = require("./model/post.model");

const authRoutes = require("./routes/auth.routes");
const postRoute = require("./routes/post.routes");
// creating express app
const app = express();
app.use(cors());
// middleware
app.use(express.json()); // It parses incoming requests with a JSON body and converts the JSON into a JavaScript object available in req.body.
app.use(cookieParser()); // It parses the cookies attached to the client request object and makes them available in req.cookies. This allows you to easily access and manipulate cookies in your Express application.



// app.get("/posts", async (req, res) => {
//   const posts = await postModel.find();
//   return res.status(200).json({ message: "Posts fetched successfully", posts });
// });

app.use("/api/auth", authRoutes);
app.use("/api", postRoute);


module.exports = app;
