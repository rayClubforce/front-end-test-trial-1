import { createReducer, on } from '@ngrx/store';
import { Post } from '../models/post';
import { fetchPosts_Success, getPost, getPost_Success } from './posts.actions';

export const postsFeatureKey = 'posts';

export interface PostsState {
  posts?: Post[];
  selectedPost?: Post;
}

const initialState: PostsState = {
  posts: undefined,
  selectedPost: undefined,
};

export const postsReducer = createReducer(
  initialState,
  on(fetchPosts_Success, (state, { posts }) => ({
    ...state,
    posts,
  })),
  on(getPost, (state) => ({ ...state, selectedPost: undefined })),
  on(getPost_Success, (state, { selectedPost }) => ({
    ...state,
    selectedPost,
  }))
);
