const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");

const users = [
  { email: "admin@admin.ru", password: "123" },
  { email: "test123@test.ru", password: "test" },
];

const strings = ["test1", "test2", "test3", "test4", "test5", "test6"];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        return res.json(users[i]);
      }
    }
  }
  res.sendStatus(400);
});

app.get("/test", (req, res) => {
  res.json(strings);
});

app.delete("/test", (req, res) => {
  console.log(req.query, "id delete");
});

app.post("/test", (req, res) => {
  console.log(req.body, "body");
  const { value } = req.body;
  console.log(value);
  strings.push(value);
  res.json(strings);
});

app.listen(3001, () => {
  console.log("Server started");
});
