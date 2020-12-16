module.exports = app => {
  const posts = require("../controllers/post.controller.js");

  var router = require("express").Router();

  // Create a new post
  router.post("/", posts.create);

  // // // Retrieve all posts
  // router.get("/", posts.findAll);

  // // Retrieve a post with id
  // router.get("/:id", posts.findOne);

  // // Update a post with id
  // router.put("/:id", posts.updateById);

  // // Delete a post with id
  // router.delete("/:id", posts.delete);

  // // Delete all posts
  // router.delete("/", posts.deleteAll);

  app.use('/api/posts', router);
};
