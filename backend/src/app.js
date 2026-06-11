const express = require("express");
require("dotenv").config();
// schema and model
const postModel = require("./model/post.model");
const multer = require("multer");
const uploadFile = require("./services/storage.service");

// creating express app
const app = express();

// middleware
app.use(express.json()); // It parses incoming requests with a JSON body and converts the JSON into a JavaScript object available in req.body.

const upload = multer({ storage: multer.memoryStorage() }); // multer is a middleware for handling multipart/form-data, which is primarily used for uploading files. In this code, multer is configured to use memory storage, meaning that the uploaded files will be stored in memory as Buffer objects rather than being saved to disk. This allows for easy access to the file data within the application without needing to manage file storage on the server.

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

module.exports = app;
