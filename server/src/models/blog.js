import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    trim: true,
    required: true,
  },
  creator: {
    type: String,
    trim: true,
    required: true,
  },
  selectedFile: String,
  // comments: {
  //   type: [{ username: String, text: String }],
  //   required: false,
  // },
  // likeCount: {
  //   type: Number,
  //   default: 0,
  // },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var Blog = mongoose.model("Blog", blogSchema);
export default Blog;
