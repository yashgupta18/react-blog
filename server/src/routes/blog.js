import express from "express";
const router = express.Router();
import { getComments, postBlog, getBlog } from "../controllers/comments.js";

router.get("/articles/:name", getComments);
router.get("/blog/get-blog", getBlog);
router.post("/blog/add-blog", postBlog);
export default router;
