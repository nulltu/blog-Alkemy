const router = require('express').Router();
const postValidator = require('../validators/postValidator');
const postRouter = require('./api/postRoutes');

router.use('/posts', postValidator, postRouter);

module.exports = router;
