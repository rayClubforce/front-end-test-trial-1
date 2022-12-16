import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({ providedIn: 'root' })
export class PostService {
  readonly BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  fetchPosts(filter: string = ''): Observable<Post[]> {
    const filterParam = filter ? `?title=${filter}` : '';

    return this.http.get<Post[]>(`${this.BASE_URL}${filterParam}`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_URL}/${id}`);
  }

  createPost(title: string, body: string): Observable<Post> {
    return this.http.post<Post>(this.BASE_URL, { title, body });
  }
}
