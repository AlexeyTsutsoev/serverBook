const { response, request } = require("express");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const jsonParser = express.json();

const users = require("./db/models/users");

const authRouter = require("./routes/auth");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const tempUsers = JSON.parse(fs.readFileSync("tempusers.json", "utf-8"));

app.use(express.json());

app.use("/auth", authRouter);
app.use("/books", bookRouter);

app.get("/", (request, response) => {
  console.log(users.name);
  response.sendFile(__dirname + "/signPage.html");
});

app.post("/", jsonParser, (request, response) => {
  for (let i = 0; i < tempUsers.length; i++) {
    if (
      tempUsers[i].name === request.body.name &&
      tempUsers[i].password === request.body.password
    ) {
      console.log("sign in!");
      break;
    }
  }
});

app.listen(8080, (err) => {
  if (err) {
    console.error("Server down", err);
    process.exit(1);
  }
  console.log("we are running on 8080");
});
