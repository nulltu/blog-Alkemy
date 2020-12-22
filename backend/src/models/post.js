module.exports = (sequelize, type) => sequelize.define('post', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: type.STRING,
  },
  body: {
    type: type.STRING,
  },
  userId: {
    type: type.STRING,
  },
  category: {
    type: type.STRING,
  },
});
