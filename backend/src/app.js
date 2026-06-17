const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config(); // to acees .env file variables
// schema and model
const postModel = require("./model/post.model");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const authRoutes = require("./routes/auth.routes");

// creating express app
const app = express();
app.use(cors());
// middleware
app.use(express.json()); // It parses incoming requests with a JSON body and converts the JSON into a JavaScript object available in req.body.
app.use(cookieParser()); // It parses the cookies attached to the client request object and makes them available in req.cookies. This allows you to easily access and manipulate cookies in your Express application.
const upload = multer({ storage: multer.memoryStorage() }); // multer is a middleware for handling multipart/form-data, which is primarily used for uploading files. 

// post
app.post("/create-post", upload.single("image"), async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  const result = await uploadFile(req.file.buffer);
  // console.log(result)
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });
  return res.status(201).json({ message: "Post created succesfully", post });
});




app.get("/posts", async (req, res)=>{
  const posts = await postModel.find()
  return res.status(200).json({message: "Posts fetched successfully", posts})
})



app.use("/api/auth", authRoutes);








module.exports = app;
