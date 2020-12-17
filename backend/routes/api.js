const router = require('express').Router();
const postValidator = require('../validators/postValidator');
const apiPostRouter = require('./api/postRoutes');

router.use('/posts', postValidator, (apiPostRouter));

module.exports = router;
