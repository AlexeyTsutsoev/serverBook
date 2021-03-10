const express = require("express");
const commentsCtrl = require("../controllers/comments");
const isAuthenticated = require("../middleware/isAuthorized");

const router = express.Router();

router.get("/", commentsCtrl.getComments);

router.use(isAuthenticated);
router.post("/create", commentsCtrl.createComment);
router.put("/update/:id", commentsCtrl.updateComment);
router.delete("/delete/:id", commentsCtrl.deleteComment);

module.exports = router;
