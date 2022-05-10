const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  // create a router to post comments to created posts
  try {
    const parsedId = JSON.parse(req.body.postId);
    const commentData = await Comment.create({
      comment_text: req.body.commentBody,
      user_id: req.session.user_id,
      post_id: parsedId,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
