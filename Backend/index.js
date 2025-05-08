// 1. Import express
const express = require("express");
const app = express();

// 2. Enable JSON body parsing
app.use(express.json());

// 3. Use a simple array as a fake "database"
let posts = []; // This will store post objects like { id: 1, title: "Hello" }
let nextId = 1; // For giving each post a unique ID

const PORT = 3000;

// 4. GET request – show a simple HTML message
app.get("/", (req, res) => {
  const htmlString = `
<html lang="en">
<body>
  <h1>Hello, this is a sample HTML page!</h1>
</body>
</html>`;
  res.send(htmlString);
});

// 5. POST request – create a new post
app.post("/create-post", (req, res) => {
  const data = req.body; // Expecting { title: "something" }
  if (!data.title) {
    return res.status(400).send("Title is required");
  }
  const newPost = { id: nextId++, title: data.title };
  posts.push(newPost);
  res.send(`Post created with ID ${newPost.id}`);
});

// 6. DELETE request – delete a post by ID
app.delete("/delete-post/:id", (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter((post) => post.id !== id);
  res.send(`Post with ID ${id} deleted (if it existed).`);
});

// 7. PUT request – update a post by ID
app.put("/update-post/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;

  const post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).send("Post not found");
  }

  if (!data.title) {
    return res.status(400).send("New title is required");
  }

  post.title = data.title;
  res.send(`Post with ID ${id} updated to "${post.title}"`);
});

// 8. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
