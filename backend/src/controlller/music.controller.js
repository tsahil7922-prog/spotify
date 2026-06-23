const musicModel = require("../model/music.modal");
const jwt = require("jsonwebtoken");
const uploadFile  = require("../services/storage.service");
const musicModal = require("../model/music.modal");

async function createMusic(req, res) {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Unautherized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded?.role !== "artist") {
      return res
        .status(403)
        .json({ message: "You dont jave access to create music" });
    }

    const { title } = req.body;

    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64"));
    const music = await musicModal.create({
      url: result.url,
      title,
      artist: decoded.id,
    });

    return res
      .status(201)
      .json({ message: "Music created successfully", music });
  } catch (err) {
    console.log("ERROR:", err);
    return res.status(401).json({
      message: "Unauthorized",
      error: err.message,
    });
  }
}

module.exports = { createMusic };
