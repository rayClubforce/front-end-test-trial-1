import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { debounceTime, Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { fetchPosts } from '../store/posts.actions';
import { PostsState } from '../store/posts.reducer';
import { getPosts } from '../store/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.sass'],
})
export class PostsListComponent {
  posts$!: Observable<any>;
  filter = new FormControl();

  constructor(private store: Store<PostsState>) {}

  ngOnInit(): void {
    this.posts$ = this.store.pipe(select(getPosts));
    
    this.store.dispatch(fetchPosts({ filter: '' }));

    this.filter.valueChanges
      .pipe(debounceTime(500))
      .subscribe((filter) => {
        this.store.dispatch(fetchPosts({ filter }));
      });
  }
}
