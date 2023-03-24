const express = require("express");
const app = express();
const PORT = 8080;

// Require the video.js file
const videoRouter = require("../routes/video.js");

// Use the videoRouter middleware for the /videos route
app.use("/videos", videoRouter);
app.use("/videos/:id", videoRouter);

// Your code for other routes goes here

// Start the server
app.listen(PORT, () => {
  console.log("Server started on port 8080");
});
