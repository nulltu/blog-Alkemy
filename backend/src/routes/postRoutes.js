const { Router } = require('express');
const postController = require('../controllers/postController');
const postValidator = require('../validators/postValidator');

const router = Router();

router.route('/posts')
  .get(postController.allPosts)
  .post(postValidator, postController.createPost);

router.route('/posts/:postId')
  .get(postController.postById)
  .delete(postController.deleteById)
  .put(postController.putById);

module.exports = router;
