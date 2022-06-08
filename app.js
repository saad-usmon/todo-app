var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("home", {
    task: task,
    complete: complete,
    name: "Shohabbos",
  });
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", function (req, res) {
  const jsonData = require("./data.json");
  const { username, password } = req.body;
  console.log(username, password);
  if (jsonData.username == username && jsonData.password == password) {
    res.status(200).json({
      data: {
        username,
        password,
      },
    });
  } else {
    res.status(401).json({
      statusCode: "401",
      message: "Unauthorized",
    });
  }
});

app.post("/", (req, res) => {
  const { name, password } = req.body;
  res.status(200).json({
    data: {
      name,
      password,
    },
  });
});

var task = ["Learning Arabic", "Reading Qur'an", "Learning Node.js"];

app.post("/addtask", function (req, res) {
  var newTask = req.body.newtask;
  task.push(newTask);
  res.redirect("/");
});

var complete = ["finished learning core js"];

app.post("/removetask", (req, res) => {
  var completedTask = req.body.check;
  if (typeof completedTask === "string") {
    complete.push(completedTask);
    task.splice(task.indexOf(completedTask), 1);
  } else if (typeof completedTask === "object") {
    for (let i = 0; i < completedTask.length; i++) {
      complete.push(completedTask[i]);
      task.splice(task.indexOf(completedTask[i]), 1);
    }
  }
  res.redirect("/");
});

app.listen(3100, function () {
  console.log("Running on port 3100!");
});
