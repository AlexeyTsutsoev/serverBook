const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/user");
const filtersRouter = require("./routes/filters");
const bookRouter = require("./routes/book");
const commentsRouter = require("./routes/comments");
const favoritesRouter = require("./routes/favorites");
const config = require("./config");

const app = express();
const port = config.common.port;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.use("/api/auth", authRouter);
app.use("/api/filters", filtersRouter);
app.use("/api/book", bookRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/favorites", favoritesRouter);
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  res.status(statusCode).json({ message: err.message });
});

app.listen(port, (err) => {
  if (err) {
    console.error("Server down", err);
    process.exit(1);
  }
  console.log(`we are running on ${port}`);
});
