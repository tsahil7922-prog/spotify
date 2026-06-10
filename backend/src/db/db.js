const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://tsahil7922_db_user:YOUR_PASSWORD@cluster0.euaokyz.mongodb.net/originalProject"
    );

    console.log("Connected to original project database");
  } catch (err) {
    console.error("MongoDB Error:", err);
  }
}

module.exports = connectDB;