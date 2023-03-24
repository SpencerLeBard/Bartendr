const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/Home.js");
});

app.get("/video", function (req, res) {
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }
  const videoPath = "Chris-Do.mp4";
  const videoSize = fs.statSync("Chris-Do.mp4").size;
  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };
  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);
});

app.listen(8080, function () {
  console.log("Listening on port 8080!");
});

//NOTE nodemon ./src/Server/stream.js
//TODO For streaming multiple videos, you can modify the /video endpoint function to handle multiple videos using an array of video paths, and then use a loop to stream each video one after the other.
