const express = require("express");
const app = express();
const router = express.Router();
const PORT = 3000;

//To define a middleware function, we call app.use() and pass it a function. Here’s a basic middleware function to print the current time in the console during every request:
app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

//By passing '/request-type' as the first argument to app.use(), this function will only run for requests sent to localhost:3000/request-type.
app.use("/request-type", (req, res, next) => {
  console.log("Request type: ", req.method);
  next();
});

//first param is the URL for this function to act upon. We are targeting '/', which is the root of our website: in this case, localhost:3000
//req represents the request that was sent to the server; We can use this object to read data about what the client is requesting to do. res represents the response that we will send back to the client.
//Here, we are calling a function on res to send back a response: 'Successful response'
app.get("/", (req, res) => {
  res.send("Wiki Home Page");
});

router.get("/about", function (req, res) {
  res.send("About this wiki");
});

//Finally, once we’ve set up our requests, we must start our server! We are passing 3000 into the listen function, which tells the app which port to listen on. The function passed in as the second parameter is optional and runs when the server starts up. This provides us some feedback in the console to know that our application is running.
app.listen(PORT, () => console.log("App is listening on port 3000"));

module.exports = router;
