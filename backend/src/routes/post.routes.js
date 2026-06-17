const express = require("express");
const router = express.Router();
const multer = require("multer");
const postController = require("../controlller/post.controller");
const upload = multer({ storage: multer.memoryStorage() }); // multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.

router.post("/create-post", upload.single("image"), postController.createPost);

router.get("/posts", postController.getPosts);

module.exports = router;
