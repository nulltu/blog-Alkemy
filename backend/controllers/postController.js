const { validationResult } = require('express-validator');
const { Post } = require('../config/db');

const postController = {

  allPosts: async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.json(posts);
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err,
      });
    }
  },

  postById: async (req, res) => {
    try {
      const postExists = await Post.findOne({
        where: { id: req.params.postId },
      });
      if (!postExists) {
        res.json({ message: 'post not found' });
      } else {
        const post = await Post.findOne({
          where: { id: req.params.postId },
        });
        res.json(post);
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err,
      });
    }
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
    const postExists = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!postExists) {
      res.json({ message: 'post not found' });
    } else {
      await Post.update(req.body, {
        where: { id: req.params.postId },
      });
      res.json({ message: 'the post was updated correctly' });
    }
  },

  deleteById: async (req, res) => {
    const postExists = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!postExists) {
      res.json({ message: 'post not found' });
    } else {
      await Post.destroy({
        where: { id: req.params.postId },
      });
      res.json({ message: 'the post was deleted successfully' });
    }
  },

};

module.exports = postController;
