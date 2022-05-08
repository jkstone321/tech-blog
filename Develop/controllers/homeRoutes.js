const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
  // get all posts for the homepage
  try {
    const postData = await Post.findAll();
    res.render("posts", { postData });
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
  res.render("signup")
});

module.exports = router;
