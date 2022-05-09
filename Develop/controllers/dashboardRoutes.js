const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  // we want to go ahead and finishing the routing to get all the posts
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
    });
    res.render("posts", { postData, layout: "dashboard.handlebars" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", withAuth, (req, res) => {
  // for showing new posts to the user
  res.render("new-posts", { layout: "dashboard.handlebars" });
});

router.get("/edit/:id", withAuth, async (res, req) => {
  // To be able to find posts by primary key and render the edit post on the dashboard
});

module.exports = router;
