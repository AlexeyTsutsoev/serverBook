const express = require("express");
const bookCtrl = require("../controllers/book");
const isAdmin = require("../middleware/isAdmin");

const router = express.Router();

router.get("/", bookCtrl.getBooks);
router.get("/:id", bookCtrl.getOneBook);
router.use(isAdmin);
router.post("/add", bookCtrl.addNewBook);

module.exports = router;
