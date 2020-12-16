const router = require('express').Router();
const postController = require('../../controllers/postController');

router.route('/')
  .get(postController.allPosts);

router.route('/:postId')
  .get(postController.postById);

router.route('/:postId')
  .put(postController.putById);

router.route('/')
  .post(postController.createPost);

router.route('/:postId')
  .delete(postController.deleteById);

module.exports = router;
