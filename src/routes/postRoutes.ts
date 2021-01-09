import { Router } from "express";
const router = Router();

import { getPosts, createPost, getPost, deletePost } from "../controllers/postController";

router.route('/')
    .get(getPosts)
    .post(createPost)

router.route('/:post_id')
    .get(getPost)
    .delete(deletePost)

export default router;