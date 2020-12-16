const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
require('dotenv').config()


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: process.env.HOST,
  dialect: dbConfig.dialect,
  logging:false,
  pool: dbConfig.pool
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.posts = require("./post.model")(sequelize, Sequelize);

module.exports = db;
