const express = require("express");
const authCtrl = require("../controllers/auth");
const validate = require("../validators");
const authVal = require("../validators/auth");

const router = express.Router();

router.post("/sign-up", validate(authVal.signUp), authCtrl.signUp);
router.post("/sign-in", validate(authVal.signIn), authCtrl.signIn);
router.get("/me", /* isAuthenticated */ authCtrl.checkUser);

module.exports = router;
