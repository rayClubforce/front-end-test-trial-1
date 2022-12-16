import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PostService } from '../services/post.service';
import { createPost, createPost_Success } from '../store/posts.actions';
import { PostsState } from '../store/posts.reducer';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.sass'],
})
export class CreatePostComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private actions$: Actions,
    private store: Store<PostsState>
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });

    this.actions$.pipe(ofType(createPost_Success)).subscribe(() => this.router.navigate(['']))
  }

  createPost(postForm: FormGroup): void {
    if (postForm.invalid) return postForm.markAllAsTouched(); //==>
    
    const post = postForm.value;

    this.store.dispatch(createPost({ post }));
  }
}
