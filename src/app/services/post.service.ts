import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostService {
  readonly BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  fetchPosts(filter: string = '') {
    const filterParam = filter ? `?title=${filter}` : '';

    return this.http.get(`${this.BASE_URL}${filterParam}`);
  }

  getPost(id: string) {
    return this.http.get(`${this.BASE_URL}/${id}`);
  }

  createPost(title: string, body: string) {
    return this.http.post(this.BASE_URL, { title, body });
  }
}
