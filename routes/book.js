const express = require("express");
const bookCtrl = require("../controllers/book");

const router = express.Router();

router.get("/", bookCtrl.getBooks);
router.get("/:id", bookCtrl.getOneBook);

module.exports = router;
