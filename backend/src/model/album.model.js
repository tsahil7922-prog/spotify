const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  musics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "music",
    },
  ],
  artists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "newUser",
      required: true,
    },
  ],
});

const albumModal = mongoose.model("album",albumSchema)
module.exports = albumModal
