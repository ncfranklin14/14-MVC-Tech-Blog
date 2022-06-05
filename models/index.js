const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

Blog.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

User.hasMany(Blog)

Blog.hasMany(Comment, {
    foreignKey: "blog_id",
    onDelete: "CASCADE",
});
Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});



module.exports = {
    User,
    Blog,
    Comment
};