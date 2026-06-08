const express = require("express");

// schema and model
const noteModel = require("./model/node.model");

// creating express app
const app = express();

// middleware
// It parses incoming requests with a JSON body and converts the JSON into a JavaScript object available in req.body.
app.use(express.json());

// post
// async function is used to handle asynchronous operations, such as database interactions,(like we store the data to data base how much time it aquire we dont know so we use async)
app.post("/notes", async (req, res) => {
  const data = req.body;
  await nodeModel.create({
    title: data.title,
    description: data.description,
    age: data.age,
  });
});

module.exports = app;
