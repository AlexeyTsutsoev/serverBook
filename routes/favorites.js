const { request } = require("express");

const express = require("express");
const favorCtrl = require("../controllers/favorites");
const isAuthenticated = require("../middleware/isAuthorized");

const router = express.Router();

//router.use(isAuthenticated);
router.get("/", favorCtrl.getUsersFavoritesBooks);
router.post("/add", favorCtrl.addToFavorites);
router.delete("/delete", favorCtrl.deleteFromFavorites);

module.exports = router;
