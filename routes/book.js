const express = require("express");
const bookCtrl = require("../controllers/book");

const router = express.Router();

router.get("/", bookCtrl.getAllBooks);

module.exports = router;
