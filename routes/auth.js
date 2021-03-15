const express = require("express");
const multer = require("multer");
const authCtrl = require("../controllers/auth");
const validate = require("../validators");
const authVal = require("../validators/auth");
const isAuthenticated = require("../middleware/isAuthorized");

// const storage = multer.diskStorage({
//   destination: "./public/avatars",
//   filename: (request, file, callBack) => {
//     let extention;
//     switch (file.mimetype) {
//       case "image/png":
//         extention = ".png";
//         break;
//       case "image/jpeg":
//         extention = ".jpeg";
//         break;
//     }
//     callBack(null, file.originalname + extention);
//   },
// });

const upload = multer({ dest: "./public/avatars" });

const router = express.Router();

router.post("/sign-up", validate(authVal.signUp), authCtrl.signUp);
router.post("/sign-in", validate(authVal.signIn), authCtrl.signIn);
router.post("/refresh", authCtrl.refreshToken);
router.get("/me", isAuthenticated, authCtrl.checkUser);
router.post(
  "/avatar",
  isAuthenticated,
  upload.single("formdata"),
  authCtrl.ChangeAvatar
);

module.exports = router;
