const express = require("express");
const app = express();
app.use(express.urlencoded());

app.post("/auth", function (req, res) {
  const streamkey = req.body.key;
  if (streamkey === "supersecret") {
    res.status(200).send("OK");
    return;
  }
  res.status(403).send("Forbidden");
});
