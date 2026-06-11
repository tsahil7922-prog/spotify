const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image:String,
    caption:String,
   

})

// modal will helps todo CRUD operations on the database(Tough without it)
const postModel = mongoose.model("post", postSchema); //"post" is the name of the collection in MongoDB.
module.exports = postModel;