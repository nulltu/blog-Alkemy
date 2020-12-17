const Sequelize = require('sequelize');
require('dotenv').config();
const PostModel = require('../models/post');

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
});

const Post = PostModel(sequelize, Sequelize);

// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('create table succefully');
//   });

module.exports = {
  Post,
};
