var express = require("express");
var bodyParser = require("body-parse");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(3100, function () {
  console.log("Running on port 3100!");
});
