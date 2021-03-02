const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth");
const filtersRouter = require("./routes/filters");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/filters", filtersRouter);

app.listen(8080, (err) => {
  if (err) {
    console.error("Server down", err);
    process.exit(1);
  }
  console.log("we are running on 8080");
});
