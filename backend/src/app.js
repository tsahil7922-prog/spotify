const express = require("express");

// schema and model
const noteModel = require("./model/node.model");

// creating express app

const app = express();
app.use(express.json());
// middleware
// It parses incoming requests with a JSON body and converts the JSON into a JavaScript object available in req.body.

// post
// async function is used to handle asynchronous operations, such as database interactions,(like we store the data to data base how much time it aquire we dont know so we use async)
app.post("/notes", async (req, res) => {
  console.log("hiiiiiiiiiii");
  try {
    const data = req.body;
    await noteModel.create({
      title: data.title,
      description: data.description,
    });
    res.status(201).json({ message: "Note created successfully" });
  } catch (err) {
    console.error(err); // ← check your terminal
    res.status(500).json({ error: err.message }); // ← check Postman/browser
  }
});

// get
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find(); // find() is a method provided by Mongoose that retrieves all documents from the "notes" collection in the MongoDB database. It returns an array of note objects that match the query criteria
  res.status(200).json({ message: "Notes fetched successfully", data: notes });
});

// delete
app.delete("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await noteModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// patch
app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;
  const updatredValue = await noteModel.findByIdAndUpdate(
    { _id: id },
    { description: description },
  );
  res
    .status(200)
    .json({ message: "Note updated successfully", data: updatredValue });
});

module.exports = app;
