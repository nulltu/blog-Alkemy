module.exports = (sequelize, type) => sequelize.define('post', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: type.STRING,
  },
  content: {
    type: type.STRING,
  },
  image: {
    type: type.STRING,
  },
  category: {
    type: type.STRING,
  },
});
