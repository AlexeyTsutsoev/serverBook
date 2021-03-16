const express = require("express");
const bookCtrl = require("../controllers/book");
const isAdmin = require("../middleware/isAdmin");
const multer = require("multer");
const test = require("../middleware/test");

const upload = multer({ dest: "./public/covers" });

const router = express.Router();

router.get("/", bookCtrl.getBooks);
router.get("/:id", bookCtrl.getOneBook);
router.post(
  "/add",
  isAdmin,
  test,
  upload.single("cover"),
  test,
  bookCtrl.addNewBook
);

module.exports = router;
