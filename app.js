const { response, request } = require("express");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const jsonParser = express.json();

const users = require("./db/models/users");

const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

app.get("/", (request, response) => {
  console.log(users.name);
  response.sendFile(__dirname + "/signPage.html");
});

app.listen(8080, (err) => {
  if (err) {
    console.error("Server down", err);
    process.exit(1);
  }
  console.log("we are running on 8080");
});
