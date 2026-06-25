const postModel = require("../model/post.model");
const uploadFile = require("../services/storage.service");
const jwt = require("jsonwebtoken");
async function createPost(req, res) {
  const result = await uploadFile(req.file.buffer);
  const accessToken  = req.cookies.accessToken ;
  if (!accessToken ) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // verified or not
  try {
    const decoded = jwt.verify(accessToken , process.env.JWT_SECRET_KEY);
  } catch (error) {
    return res.status(401).json({ message: "Invalid accessToken " });
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
