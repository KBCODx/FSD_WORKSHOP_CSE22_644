const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Sample in-memory data store
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// 1. GET - Fetch all users or a single user
app.get('/users', (req, res) => {
  res.status(200).json({
    success: true,
    data: users
  });
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ success: true, data: user });
});

// 2. POST - Create a new user
app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name
  };

  users.push(newUser);
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser
  });
});

// 3. PUT - Update an existing user
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required to update" });
  }

  users[userIndex].name = name;
  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: users[userIndex]
  });
});

// 4. DELETE - Remove a user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userExists = users.some(u => u.id === userId);

  if (!userExists) {
    return res.status(404).json({ message: "User not found" });
  }

  users = users.filter(u => u.id !== userId);
  res.status(200).json({
    success: true,
    message: `User with id ${userId} deleted successfully`
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});