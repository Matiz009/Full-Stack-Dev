// 1. Import express
const express = require("express");
const mongoose = require("mongoose");
const todo = require("./model/todo");
const app = express();

// 2. Enable JSON body parsing
app.use(express.json());

const PORT = 3000;

//connect to the database
mongoose
  .connect("mongodb://localhost/todos", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB."))
  .catch((error) => console.log(error.message));

//end point to get all the todos

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  if (!todos) {
    return res.status(404).json({ message: "No task found" });
  }
  res.json(todos);
});

//end point to get a task by id

app.get("/tasks/:id", async (req, res) => {
  const Id = req.params.id;
  try {
    const task = await todo.findById(Id);
    console.log("Returned task:", task);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).json({ error: "Server error" });
  }
});

//end point to create a task

app.post("/create-todo", async (req, res) => {
  const { task, author, description, id } = req.body;
  if (!task || !author || !id || !description) {
    return res
      .status(400)
      .json({ message: "Task, author, id and description are required" });
  }
  const newTodo = await todo.create({
    task,
    description,
    author,
    id,
  });
  res.status(201).json(newTodo);
});

//end point to update a task
app.put("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id; // Fixed this line

    const { task, author, description } = req.body;

    const taskToUpdate = await book.findByIdAndUpdate(
      id,
      {
        task,
        author,
        description,
      },
      { new: true } // Return the updated document
    );

    if (!taskToUpdate) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(taskToUpdate);
  } catch (error) {
    res.status(500).json({ message: "Invalid ID format or server error" });
  }
});

//end point to delete a task

app.delete("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id; // Use the string directly
    const taskToDelete = await todo.findByIdAndDelete(id); // Query by MongoDB's _id
    if (!taskToDelete) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Invalid ID format or server error" });
  }
});
// 8. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
