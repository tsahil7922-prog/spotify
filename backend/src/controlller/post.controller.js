const postModel = require("../model/post.model");
const uploadFile = require("../services/storage.service");

async function createPost(req, res) {
  const result = await uploadFile(req.file.buffer);
  // console.log(result)
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });
  return res.status(201).json({ message: "Post created succesfully", post });
}




module.exports = { createPost };
