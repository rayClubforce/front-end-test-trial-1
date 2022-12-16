import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postsFeatureKey, PostsState } from './posts.reducer';

const postsState = createFeatureSelector<PostsState>(postsFeatureKey);

export const getPosts = createSelector(postsState, ({ posts }) => posts ?? []);
export const getSelectedPost = createSelector(postsState, ({ selectedPost }) => selectedPost);
