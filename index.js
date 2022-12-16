// load express and dotenv modules
const express = require("express");
require("dotenv").config();

// create a new express application
const app = express();

// use environment variable PORT or 3000
const port = process.env.PORT || 3000;

// handle GET requests to the root path
app.get("/", (req, res, next) => {
  try {
    res.send("Hello World!");
  } catch (err) {
    next(err);
  }
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
