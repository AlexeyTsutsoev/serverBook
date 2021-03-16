const express = require("express");
const bookCtrl = require("../controllers/book");
const isAdmin = require("../middleware/isAdmin");
const multer = require("multer");

const upload = multer({ dest: "./public/covers" });

const router = express.Router();

router.get("/", bookCtrl.getBooks);
router.get("/:id", bookCtrl.getOneBook);
router.post("/add", isAdmin, upload.single("cover"), bookCtrl.addNewBook);

module.exports = router;
