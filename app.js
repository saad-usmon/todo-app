var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("home", { task: tasks, complete: complete });
});

var tasks = ["Learning Arabic", "Reading Qur'an", "Learning Node.js"];

app.post("/addtask", function (req, res) {
  var newTask = req.body.newtask;
  tasks.push(newTask);
  res.redirect("/");
});

app.listen(3100, function () {
  console.log("Running on port 3100!");
});
