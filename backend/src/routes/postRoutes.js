const { Router } = require('express');
const asyncMiddleware = require('../middlewares/asyncMiddleware')
const postValidator = require('../validators/postValidator');
const { allPosts, createPost, deleteAll, postById, deleteById, putById
} = require('../controllers/postController')

const router = Router();

router.route('/posts')
  .get(allPosts)
  .post(postValidator, createPost);

router.route('/posts/:postId')
  .get(postById)
  .delete(deleteById)
  .put(putById);

module.exports = router;
