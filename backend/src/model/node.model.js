const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
    title:String,
    description:String,
    age:Number,

})

// modal will helps todo CRUD operations on the database(Tough without it)
const nodeModel = mongoose.model("node", nodeSchema);
model.exports = nodeModel;