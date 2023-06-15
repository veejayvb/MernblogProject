const express = require("express");
const router = express.Router();
const PostController = require("../Controller/PostController");

router.get("/posts", PostController.getAllPost);
router.get("/posts/:id", PostController.getSinglePost);
router.post("/posts", PostController.AddPost);
router.patch("/posts/:id", PostController.updatePost);
router.delete("/posts/:id", PostController.deletePost);

module.exports = router;
