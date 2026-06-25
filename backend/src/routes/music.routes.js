const express = require("express");
const router = express.Router();
const musicController = require("../controlller/music.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/upload",
  authMiddleware.authArtist,
  upload.single("music"),
  musicController.createMusic,
);

router.post("/album", authMiddleware.authArtist, musicController.createAlbum);





// for users only to get alll music data
router.get("/",authMiddleware.authUser,musicController.getAllMusics)

// 
router.get("/albums",authMiddleware.authUser,musicController.getAllAlbums)

router.get("/albums:id",authMiddleware.authUser,musicController.getAlbumById)

module.exports = router;
