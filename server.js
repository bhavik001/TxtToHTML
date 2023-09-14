const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

// Serve static files from the 'examples' directory
app.use(express.static(path.join(__dirname, "app")));

// Define a route for the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "app", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
