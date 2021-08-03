import express from "express";
import mongoose from "mongoose";
import Blog from "../models/blog.js";
const router = express.Router();

export const getComments = async (req, res) => {
  // res.send("This works");
  try {
    const articleName = req.params.name;
    const articleInfo = await Blog.find({
      name: articleName,
    });
    res.status(200).json(articleInfo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postBlog = async (req, res) => {
  const blog = req.body;
  const newblog = new Blog({
    ...blog,
    createdAt: new Date().toISOString(),
  });

  try {
    await newblog.save();
    res.status(201).send(newblog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getBlog = async (req, res) => {
  // res.send("This works");
  try {
    const blog = await Blog.find();
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const postComments = async (req, res) => {
//   try {
//     const { username, text } = req.body;
//     const articleName = req.params.name;
//     // const articleInfo = await Blog.findOne({ name: articleName });
//     await Blog.findOneAndUpdate(articleName, {
//       $set: {
//         comments: comments.push({ username, text }),
//       },
//     });
//     const updatedArticleInfo = await Blog.findOne({ name: articleName });
//     res.status(200).json(updatedArticleInfo);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
