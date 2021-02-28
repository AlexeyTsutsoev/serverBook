const express = require("express");
const authCtrl = require("../controllers/auth");
const router = express.Router();
// const validator = require("../middleware/validator");

router.post("/sign-up", authCtrl.signUp);

router.post("/sign-in", authCtrl.signIn);

module.exports = router;
