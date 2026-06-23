const express = require("express");
const router = express.Router();
const musicController = require("../controlller/music.controller");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/upload", upload.single("music"), musicController.createMusic);
module.exports = router;
