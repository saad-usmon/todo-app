var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello, World!");
});

app.listen(3100, function () {
  console.log("Running on port 3100!");
});
