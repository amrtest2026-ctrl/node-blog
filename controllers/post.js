const AppError = require("../utilts/AppError");
const Post = require("../models/post");
const User = require("../models/user");

const createPost = async (req, res) => {
  const body = req.body;
  const user = req.user
  const post = await Post.create({
    title: body.title,
    content: body.content,
    autherId: user._id,
  });

  res.status(200).json({ message: "post created", post });
};

const getAllPosts = async (req, res) => {
  const posts = await Post.find().populate("autherId");
  res.status(200).json(posts);
};

module.exports={
    createPost,
    getAllPosts
}
