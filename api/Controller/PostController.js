const Post = require("../models/PostModel");

exports.AddPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newPost,
      },
    });
  } catch (err) {
    res.status(500).json(`${err.message}`);
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({
        status: "success",
        data: {
          updatedPost,
        },
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "You can update only your account",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "fail",
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // console.log(post)
    if (post.username === req.body.username) {
      await Post.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Post deleted Successfully" });
    } else {
      res.status(400).json({ message: "you can delete only your post" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAllPost = async (req, res) => {
  let username = req.query.user
  // console.log(username);
  try {
    let Posts;
    if(username) {
      Posts = await Post.find({username : username})
    }else{
    Posts = await Post.find();
    }
    res.status(200).json(Posts);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
};
