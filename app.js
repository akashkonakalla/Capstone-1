// app.js
const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});


// Root route
app.get("/", (req, res) => {
  // This line sends the HTML file as the response for the root URL
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
