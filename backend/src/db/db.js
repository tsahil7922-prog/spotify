const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://tsahil7922_db_user:zUkPSY0om0ro3H8a@cluster0.euaokyz.mongodb.net/originalProject"
    );

    console.log("Connected to original project database");
  } catch (err) {
    console.error("MongoDB Error:", err);
  }
}

module.exports = connectDB;