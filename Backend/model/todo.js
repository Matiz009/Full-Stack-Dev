const mongoose = require("mongoose");
let todos = new mongoose.Schema({
  task: String,
  author: String,
  description: String,
  id: Number,
});

const todo = mongoose.model("Todo", todos);
module.exports = todo;
