const express = require("express");

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET requests
app.get("/", (req, res) => {
  res.json({ success: true, method: "GET", ...req.body });
});

// Route to handle POST requests
app.post("/", (req, res) => {
  res.json({ success: true, method: "POST", ...req.body });
});

// Define the port to listen on
const port = 3000;

// Start listening on the defined port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
