const express = require("express");
const authRouter = require("./routes/auth");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

app.listen(8080, (err) => {
  if (err) {
    console.error("Server down", err);
    process.exit(1);
  }
  console.log("we are running on 8080");
});
