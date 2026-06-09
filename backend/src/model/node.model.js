const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
    title:String,
    description:String,
   

})

// modal will helps todo CRUD operations on the database(Tough without it)
const nodeModel = mongoose.model("node", nodeSchema);
module.exports = nodeModel;