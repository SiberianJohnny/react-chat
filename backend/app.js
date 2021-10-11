const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");

const users = [
  { email: "admin@admin.ru", password: "123" },
  { email: "test123@test.ru", password: "test" },
];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body, 'body')
  if (email && password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        return res.json(users[i]);
      }
    }
  }
});

app.listen(3001, () => {
  console.log("Server started");
});
