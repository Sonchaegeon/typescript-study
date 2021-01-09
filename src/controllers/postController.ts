import { Request, Response } from "express";
import { connect } from "../database";
import { Post } from "../interface/Post";

export async function getPosts(req: Request, res: Response): Promise<Response> {
    const db = await connect();
    const posts = await db.query('SELECT * FROM posts');
    return res.json(posts[0]);
}

export async function createPost(req: Request, res: Response): Promise<Response>{
    const newPost: Post = req.body;
    const db = await connect();
    (await db).query('INSERT INTO posts SET ?', [newPost]);
    return res.json({
        message: 'Post Created'
    });
}

export async function getPost(req: Request, res: Response): Promise<Response>{
    const postId = req.params.post_id;
    const db = await connect();
    const post = await db.query(`SELECT * FROM posts WHERE id = ?`, [postId]);
    return res.json(post[0]);
}

export async function deletePost(req: Request, res: Response): Promise<Response>{
    const postId = req.params.post_id;
    const db = await connect();
    await db.query('DELETE FROM posts WHERE id = ?', [postId]);
    return res.json({
        message: 'Post deleted'
    });
}