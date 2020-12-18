const { Router } = require('express');
const asyncMiddleware = require('../middlewares/asyncMiddleware')
const postValidator = require('../validators/postValidator');
const postController = require('../controllers/postController');

const router = Router();

router.route('/posts')
  .get(postController.allPosts)
  .post(postValidator, postController.createPost);

router.route('/posts/:postId')
  .get(postController.postById)
  .delete(postController.deleteById)
  .put(postController.putById);

module.exports = router;
