const { check } = require('express-validator');

const postValidator = [
  check('title').isLength({ max: 10 }).withMessage('max 10 chars').notEmpty()
    .withMessage('the title field cannot be empty.'),
  check('content').isLength({ min: 8 }).withMessage('min 8 char').notEmpty()
    .withMessage('the content field cannot be empty.'),
  check('category').isLength({ max: 12 }).withMessage('max 10 chars').isString()
    .withMessage('enter only alphanumeric characters')
    .notEmpty()
    .withMessage('the category field cannot be empty.'),
  check('image').isString().withMessage('enter only alphanumeric characters').notEmpty()
    .withMessage('the title field cannot be empty.'),
];

module.exports = postValidator;
