const express = require("express");
const filterCtrl = require("../controllers/filters");

const router = express.Router();

router.get("/authors", filterCtrl.getAllAuthors);
router.get("/publishers", filterCtrl.getAllPublishers);
router.get("/categories", filterCtrl.getAllCategories);

module.exports = router;
