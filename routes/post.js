const express = require("express");
const router = express.Router();
const {
    createPost,
    getAllPosts
}= require("../controllers/post");
const auth = require("../middlewares/auth");
const restrictTo = require("../middlewares/restrictTo");

router.post(
  "/",
  auth,
  createPost
);
router.get("/",auth,restrictTo("admin"), getAllPosts);


module.exports = router;
