const express = require("express");
const favorCtrl = require("../controllers/favorites");

const router = express.Router();

router.get("/", favorCtrl.getUsersFavoritesBooks);
router.post("/add", favorCtrl.addToFavorites);
router.delete("/delete", favorCtrl.deleteFromFavorites);

module.exports = router;
