const Sequelize = require('sequelize');

const PostModel = require('../models/post');

const sequelize  = new Sequelize('db_blogs', 'root', 'Milanesaq7', {
    host: 'localhost',
    dialect: 'mysql'
});

const Post = PostModel(sequelize, Sequelize);

// sequelize.sync({force: false})
// .then(()=>{
//     console.log('create table succefully')
// })

module.exports = {
    Post
}