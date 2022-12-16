import { createAction, props } from "@ngrx/store";
import { Post } from "../models/post";

export const fetchPosts = createAction('fetchPosts', props<{ filter: string } >())
export const fetchPosts_Success = createAction('fetchPosts_Success', props<{ posts: Post[] } >())

export const getPost = createAction('getPost', props<{ postId: number } >())
export const getPost_Success = createAction('getPost_Success', props<{ selectedPost: Post } >())

export const createPost = createAction('createPost', props<{ post: Post } >())
export const createPost_Success = createAction('createPost_Success')