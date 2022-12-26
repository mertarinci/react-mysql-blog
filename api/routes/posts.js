import express from "express"
import { addPost, deletePost, editPost, getPosts, getSinglePost } from "../controllers/post.js"

const router = express.Router()


router.get("/", getPosts)
router.get("/:id", getSinglePost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", editPost)

export default router