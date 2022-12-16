import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { PostService } from '../services/post.service';
import {
  createPost,
  createPost_Success,
  fetchPosts,
  fetchPosts_Success,
  getPost,
  getPost_Success,
} from './posts.actions';

@Injectable()
export class PostsEffects {
  fetchPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPosts),
      switchMap(({ filter }) =>
        this.postService
          .fetchPosts(filter)
          .pipe(switchMap((posts) => [fetchPosts_Success({ posts })]))
      )
    )
  );

  getPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPost),
      switchMap(({ postId }) =>
        this.postService
          .getPost(postId)
          .pipe(
            switchMap((selectedPost) => [getPost_Success({ selectedPost })])
          )
      )
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPost),
      switchMap(({ post: { title, body } }) =>
        this.postService
          .createPost(title, body)
          .pipe(switchMap(() => [createPost_Success()]))
      )
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {}
}
