const express = require("express");
const bookCtrl = require("../controllers/book");
const isAdmin = require("../middleware/isAdmin");

const router = express.Router();

router.get("/", bookCtrl.getBooks);
router.get("/:id", bookCtrl.getOneBook);
router.post("/add", isAdmin, bookCtrl.addNewBook);

module.exports = router;
