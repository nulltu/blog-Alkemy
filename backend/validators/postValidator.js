const { check } = require('express-validator');

const postValidator = [
  check('title').isLength({ max: 10 }).withMessage('max 10 chars'),
  check('content').isLength({ min: 8 }).withMessage('min 8 char'),
  check('category').isLength({ max: 10 }).withMessage('max 10 chars'),
  check('image').isString(),
];

module.exports = postValidator;
