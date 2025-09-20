// app.js
const express = require("express");
const app = express();

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Root route
app.get("/", (req, res) => {
  res.send("Hello from Automated Deployment System!");
});

module.exports = app;
