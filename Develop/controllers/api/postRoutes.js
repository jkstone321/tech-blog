const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  // Create a post
  try {
    const postData = await Post.create({
      post_title: req.body.title,
      post_text: req.body.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  // Update a post
});

router.delete("/:id", withAuth, async (req, res) => {
  // Delete the post
});

module.exports = router;
