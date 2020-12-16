module.exports = (sequelize, Sequelize) => {
  const { DataTypes } = require("sequelize");
  const Post = sequelize.define("post", {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    },

    image: {
      type: Sequelize.STRING
    },
    
    category: {
      type: Sequelize.STRING
    }
    
  });

  return Post;
};
