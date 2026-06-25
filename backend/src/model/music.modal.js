const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "newUser",
    required:true
  },
});

const musicModal = mongoose.model("music", musicSchema);
module.exports = musicModal;
