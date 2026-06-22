const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.Mongo_URI);

    console.log("Connected to original project database");
  } catch (err) {
    console.error("MongoDB Error:", err);
  }
}

module.exports = connectDB;
