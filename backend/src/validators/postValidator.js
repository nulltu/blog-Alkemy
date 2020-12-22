const { check } = require('express-validator');

const postValidator = [
  check('title').notEmpty()
    .withMessage('the title field cannot be empty.'),
  check('body').notEmpty()
    .withMessage('the content field cannot be empty.'),
];

module.exports = postValidator;
