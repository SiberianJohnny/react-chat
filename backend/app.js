const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");

const users = [
  { email: "admin@admin.ru", password: "123" },
  { email: "test123@test.ru", password: "test" },
];

const chats = {
  chatList: [{
    id: '0',
    name: "Chat1"

  },
  {
    id: '1',
    name: "Chat2"

  },
  ]
};


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

app.get("/chats", (req, res) => {
  res.json(chats);
});


app.post("/chats", (req, res) => {
  const { name } = req.body;
  chats.chatList.push({ id: `${chats.chatList.length}`, name: name });
  res.json(chats);
});

app.delete("/chats", (req, res) => {
  const chatsIndex = chats.chatList.findIndex(p => p.id == req.query.id);
  chats.chatList.splice(chatsIndex, 1);
  return res.json(chats);
});

app.listen(3001, () => {
  console.log("Server started");
});
