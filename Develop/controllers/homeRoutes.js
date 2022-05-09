const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
  // get all posts for the homepage
  try {
    const postData = await Post.findAll({ include: User });
    const posts = postData.map((project) => project.get({ plain: true }));
    console.log(posts);
    res.render("posts", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  // get a single post
});

router.get("/login", (req, res) => {
  // login
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // signup
  res.render("signup");
});

module.exports = router;
