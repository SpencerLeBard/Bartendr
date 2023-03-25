const express = require("express");
const fs = require("fs");
const app = express();
const PATH = "./src/Assets/one.mp4";

app.get("/video", function (req, res) {
  console.log(req);
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }
  const videoPath = PATH;
  const videoSize = fs.statSync(videoPath).size;
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
