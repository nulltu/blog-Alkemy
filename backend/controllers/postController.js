const { validationResult } = require('express-validator');
const { Post } = require('../config/db');

const postController = {

  allPosts: async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
  },

  postById: async (req, res) => {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    res.json(post);
  },

  createPost: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const post = await Post.create(req.body);
    res.json(post);
  },

  putById: async (req, res) => {
    await Post.update(req.body, {
      where: { id: req.params.postId },
    });
    res.json({ message: 'update ok' });
  },

  deleteById: async (req, res) => {
    await Post.destroy({
      where: { id: req.params.postId },
    });
    res.json({ message: 'delete ok' });
  },

};

module.exports = postController;
