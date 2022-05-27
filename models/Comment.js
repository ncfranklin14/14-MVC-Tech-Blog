const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
  
      }, 
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
  
      },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
);

module.exports= Comment;