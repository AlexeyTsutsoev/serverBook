const express = require("express");
const authRouter = require("./routes/auth");
const corsMiddleWare = require("./middleware/cors");

const app = express();

app.use(corsMiddleWare);
app.use(express.json());
app.use("/auth", authRouter);

app.listen(8080, (err) => {
  if (err) {
    console.error("Server down", err);
    process.exit(1);
  }
  console.log("we are running on 8080");
});
