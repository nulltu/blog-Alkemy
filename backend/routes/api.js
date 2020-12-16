const router = require('express').Router();

const apiPostRouter = require('./api/postRoutes');

router.use('/posts', apiPostRouter)

module.exports = router