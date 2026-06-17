const postModel = require("../model/post.model");
const uploadFile = require("../services/storage.service");
const jwt = require("jsonwebtoken");
async function createPost(req, res) {
  const result = await uploadFile(req.file.buffer);
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });
  return res.status(201).json({ message: "Post created succesfully", post });
}

async function getPosts(req, res) {
  const posts = await postModel.find();
  return res.status(200).json({ message: "Posts fetched successfully", posts });
}

module.exports = { createPost, getPosts };
