import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPost } from '../store/posts.actions';
import { PostsState } from '../store/posts.reducer';
import { getSelectedPost } from '../store/posts.selectors';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass'],
})
export class PostDetailComponent {
  post$!: Observable<any>;

  constructor(
    private store: Store<PostsState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.post$ = this.store.pipe(select(getSelectedPost));

    this.activatedRoute.params.subscribe(({ postId }) =>
      this.store.dispatch(getPost({ postId }))
    );
  }
}
