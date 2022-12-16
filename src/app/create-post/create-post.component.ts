import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.sass']
})
export class CreatePostComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    })
  }

  createPost(postForm: FormGroup): void {
    if (postForm.invalid) return postForm.markAllAsTouched(); //==>

    this.postService.createPost(postForm.value.title, postForm.value.body).subscribe();
  }
}
