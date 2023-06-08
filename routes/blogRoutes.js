const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogController,
} = require("../controllers/blogController");

// router object
const router = express.Router();

// routes
// GET || ALL BLOGS
router.get("/all-blog", getAllBlogsController);

// POST || CREATE BLOG
router.post("/create-blog", createBlogController);

// PUT || UPDATE BLOG
router.put("/update-blog/:id", updateBlogController);

// GET || SINGLE BLOG DETAILS
router.get("/get-blog/:id", getBlogByIdController);

// DELETE || DELETE BLOG
router.delete("/delete-blog/:id", deleteBlogController);

// GET || USER BLOG
router.get('/user-blog/:id', userBlogController);

module.exports = router;
