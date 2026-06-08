const mongoose = require('mongoose')
async function connectDB() {
    await mongoose.connect("mongodb+srv://tsahil7922_db_user:KDal8hyTC4aWslLt@cluster0.euaokyz.mongodb.net/halley")
    console.log("Connected to MongoDB")
}

module.exports = connectDB;