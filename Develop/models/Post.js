const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Post extends Model {}

Post.init(
  {
    post_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.TEXT,
      references: {
        model: "user",
        key: "id",
      },
    },
    comment_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'comment',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "post",
  }
);

module.exports = Post;
