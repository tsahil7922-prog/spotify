const musicModel = require("../model/music.modal");
const albumModal = require("../model/album.model");
const jwt = require("jsonwebtoken");
const uploadFile = require("../services/storage.service");
const musicModal = require("../model/music.modal");
const userModal = require("../model/user.model");
async function createMusic(req, res) {
  const { title } = req.body;

  const file = req.file;
  if (!file) {
    return res.status(400).json({
      message: "Music file is required",
    });
  }
  const result = await uploadFile(file.buffer.toString("base64"));
  const music = await musicModal.create({
    url: result.url,
    title,
    artist: req.user.id,
  });

  return res.status(201).json({ message: "Music created successfully", music });
}

async function createAlbum(req, res) {
  const { title, musics } = req.body;
  const album = await albumModal.create({
    title,
    artists: req.user.id,
    musics: musics,
  });

  console.log(req.user.id, "empty");
  return res.status(201).json({
    message: "Album created successfully",
    album: {
      id: album._id,
      title: album.title,
      artist: album.artists,
      musics: album.musics,
    },
  });
}

async function getAllMusics(req, res) {
  const allMusics = await musicModal.find().skip(0).limit(10);
  res.status(200).json({ message: "Music fetched successfully", allMusics });
}

async function getAllAlbums(req, res) {
  const allAlbum = await albumModal
    .find()
    .select("title musics")
    .populate("artists", "username email role");

  res.status(200).json({ message: "Music fetched successfully", allAlbum });
}

async function getAlbumById(req, res) {
  const paramId = req.params.albumId;
  const album = await albumModal
    .findById(paramId)
    .populate("artists", "username email role")
    .populate({
      path: "musics",
      select: "title url",
    });
  // .populate("musics");

  return res.status(200).json({ message: "Music fetched successfully", album });
}

// getting all artists
async function getAllArtists(req, res) {
  try {
    const allArtist = await userModal
      .find({ role: "artist" })
      .select("username email role");
    res
      .status(200)
      .json({ message: "Artists fetched successfully", allArtist });
  } catch (error) {
    console.log(error, "error in getting all artists");
    res.status(500).json({ message: "Error in getting all artists" });
  }
}

async function getArtistById(req, res) {
  try {
    const { artistId } = req.params;

    const artist = await userModal
      .findById(artistId)
      .select("username email role");

    if (!artist) {
      return res.status(404).json({
        message: "Artist not found",
      });
    }

    const songs = await musicModal
      .find({ artist: artistId })
      .populate("artist", "username")
      .select("title url artist");

    res.status(200).json({
      message: "Artist fetched successfully",
      artist,
      songs,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

module.exports = {
  createMusic,
  createAlbum,
  getAllMusics,
  getAllAlbums,
  getAlbumById,
  getAllArtists,
  getArtistById,
};
