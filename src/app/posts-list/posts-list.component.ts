import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.sass']
})
export class PostsListComponent {
  posts$!: Observable<any>;
  filter = new FormControl();

  constructor(private postService: PostService) { }
  
  ngOnInit(): void {
    this.posts$ = this.postService.fetchPosts();

    this.filter.valueChanges.subscribe((filterValue) => {
      this.posts$ = this.postService.fetchPosts(filterValue);
    })
  }
}
