const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();
const PostModel = require('../models/post');

const sequelize = new Sequelize(process.env.DB,
  process.env.USER, process.env.PASSWORD, {
    port: 33070,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  });

sequelize.sync({alter: true})
.then(()=>{
  console.log('sync table finished')
})

const Post = PostModel(sequelize, Sequelize);
module.exports = {
  Post,
};
