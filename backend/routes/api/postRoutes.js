const router = require('express').Router();
const {Post} = require('../../config/db');


router.get('/', async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts)
})

router.post('/', async (req, res) => {
    const post = await Post.create(req.body);
    res.json(post)
})

router.put('/:postId', async (req, res) => {
    await Post.update(req.body, {
        where: { id: req.params.postId }
    });
    res.json({message: 'update ok'})
})

module.exports = router;
