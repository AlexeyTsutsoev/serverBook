const express = require("express");
const authCtrl = require("../controllers/auth");
const router = express.Router();

router.get("/sign-up", authCtrl.signUp);

module.exports = router;
